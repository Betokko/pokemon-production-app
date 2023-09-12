import { memo } from 'react'
import clsx from 'clsx'
import s from './CommentList.module.scss'
import { IComment } from 'entities/Comment'
import { Text } from 'shared/ui/Text/ui/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.CommentList, className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
                ))
                : <Text text={t('no comments')}/>
            }
        </div>
    )
})
