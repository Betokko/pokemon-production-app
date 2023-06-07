import clsx from 'clsx'
import s from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface ISelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: ISelectOptions[]
    value?: string
    onChange?: (value: string) => void
    readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, onChange, readOnly } = props

    const optionsList = useMemo(() => {
        return options?.map((option, i) => (
            <option key={i} className={s.option} value={option.value}>{option.content}</option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={clsx([s.select, { [s.readOnly]: readOnly }, className])}>
            {label && <span className={s.label}>{label}</span>}
            <select
                disabled={readOnly}
                className={s.options}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
})
