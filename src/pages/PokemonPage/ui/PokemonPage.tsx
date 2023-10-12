import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonPage.module.scss'
import { memo, useCallback, useEffect } from 'react'
import { Pokemon } from 'entities/Pokemon'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { getPokemonComments, pokemonCommentsReducer } from '../model/slice/polemonCommentsSlice'
import { useSelector } from 'react-redux'
import { getPokemonCommentsIsLoading } from '../model/selector/pokemonCommentsSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCommentsByPokemonId } from 'pages/PokemonPage/model/service/fetchCommentsByPokemonId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForPokemon } from 'pages/PokemonPage/model/service/addCommentForPokemon'
import { Button, ThemeButton } from 'shared/ui/Button'
import { RoutePath } from 'app/providers/Router/lib/routeConfig'
import BackIcon from 'shared/assets/icons/arrow_back_black_24dp.svg'

interface PokemonPageProps {
    className?: string
}

const reducers: TReducersList = {
    pokemonComments: pokemonCommentsReducer
}

const PokemonPage = (props: PokemonPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const comments = useSelector(getPokemonComments.selectAll)
    const commentsIsLoading = useSelector(getPokemonCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForPokemon(text))
    }, [dispatch])

    const onBackToPokemonList = useCallback(() => { navigate(RoutePath.pokemon) }, [navigate])

    useEffect(() => {
        if (id) dispatch(fetchCommentsByPokemonId(id))
    }, [dispatch, id])

    if (!id) return <div>{t('error')}</div>

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={clsx([s.PokemonPage, className])}>
                <Button onClick={onBackToPokemonList} theme={ThemeButton.OUTLINE}>
                    <BackIcon fill={'var(--primary-color)'} height='16px' width='16px' viewBox='0 0 32 24' />
                    {t('back')}
                </Button>
                <Pokemon id={id} />
                <div className={s.comments}>
                    <Text title={t('comments')} size={TextSize.L}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </div>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(PokemonPage)
