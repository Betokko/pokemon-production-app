import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonPage.module.scss'
import { memo, useCallback, useEffect } from 'react'
import { Pokemon } from 'entities/Pokemon'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/ui/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { getPokemonComments, pokemonCommentsReducer } from '../model/slice/polemonCommentsSlice'
import { useSelector } from 'react-redux'
import { getPokemonCommentsIsLoading } from '../model/selector/pokemonCommentsSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCommentsByPokemonId } from 'pages/PokemonPage/model/service/fetchCommentsByPokemonId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForPokemon } from 'pages/PokemonPage/model/service/addCommentForPokemon'

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
    const comments = useSelector(getPokemonComments.selectAll)
    const commentsIsLoading = useSelector(getPokemonCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForPokemon(text))
    }, [dispatch])

    useEffect(() => {
        if (id) dispatch(fetchCommentsByPokemonId(id))
    }, [dispatch, id])

    if (!id) return <div>{t('error')}</div>

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={clsx([s.PokemonPage, className])}>
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
