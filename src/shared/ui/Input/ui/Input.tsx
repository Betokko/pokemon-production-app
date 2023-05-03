import { InputHTMLAttributes, memo } from 'react'
import clsx from 'clsx'
import s from './Input.module.scss'

type THTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends THTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
}

export const Input = memo((props: IInputProps) => {
    const { className, value, onChange, type = 'text', label, ...otherProps } = props

    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value)
    }

    return (
        <div className={clsx([s.input, className])}>
            {label}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
})
