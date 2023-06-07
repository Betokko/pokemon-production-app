import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select'
import { Currency } from 'entities/Currency/model/types/currency'
import { memo, useMemo } from 'react'

interface CurrencySelectProps {
    value?: Currency
    onChange?: () => void
    readOnly?: boolean
}

export const CurrencySelect = memo(({ value, onChange, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation()
    const currencyOptions = useMemo(
        () => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })
        ), [])

    return (
        <Select
            label={t('currency')}
            options={currencyOptions}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
        />
    )
})
