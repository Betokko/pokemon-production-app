import { InputHTMLAttributes, memo } from 'react'
import clsx from 'clsx'
import s from './Input.module.scss'

type THTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface IInputProps extends THTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    label?: string
    readOnly?: boolean
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        readOnly,
        ...otherProps
    } = props

    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value)
    }

    return (
        <div className={clsx([s.input, { [s.readOnly]: readOnly }, className])}>
            {label}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
                disabled={readOnly}
            />
        </div>
    )
})
