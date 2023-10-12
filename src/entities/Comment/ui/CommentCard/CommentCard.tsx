import { memo } from 'react'
import clsx from 'clsx'
import s from './CommentCard.module.scss'
import { IComment } from '../../model/types/comment'
import { Placeholder } from 'shared/ui/Placeholder'
import { Text, TextSize } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePath } from 'app/providers/Router/lib/routeConfig'

interface CommentCardProps {
    className?: string
    comment: IComment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <div className={clsx([s.CommentCard, className])}>
                <div className={s.header}>
                    <Skeleton circle width={'4rem'} />
                    <Skeleton height={'2rem'} width={'50%'} />
                </div>
                <Skeleton height={'2rem'}/>
            </div>
        )
    }

    if (!comment) return null

    return (
        <div className={clsx([s.CommentCard, className])}>
            <div className={s.header}>
                <AppLink to={`${RoutePath.profile}/${comment.user.id}`}>
                    {comment.user.placeholder &&
                      <Placeholder
                          alt={comment.user.username}
                          src={comment.user.placeholder} size={'4rem'}
                      />}
                </AppLink>
                <Text title={comment.user.username} size={TextSize.L}/>
            </div>
            <Text text={comment.text}/>
        </div>
    )
})
