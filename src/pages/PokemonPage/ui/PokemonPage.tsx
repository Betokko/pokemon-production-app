import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonPage.module.scss'
import { memo } from 'react'
import { Pokemon } from 'entities/Pokemon'
import { useParams } from 'react-router-dom'

interface PokemonPageProps {
    className?: string
}

const PokemonPage = (props: PokemonPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()

    if (!id) return <div>{t('error')}</div>

    return <Pokemon id={id} />
}

export default memo(PokemonPage)
