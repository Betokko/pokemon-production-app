import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string
    value?: string
    onChange?: (value: string | ChangeEvent<HTMLInputElement>) => void
    label?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', label, autoFocus, ...other
    } = props;

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    return (
        <div className={classNames(s.inputWrapper, {}, [className])}>
            {label && (
                <div className={s.label}>
                    {`${label}`}
                </div>
            )}
            <input
                {...other}
                className={classNames(s.input, {}, [className])}
                type={type}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );
});
