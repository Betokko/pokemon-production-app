import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input'
import { Button, ThemeButton } from 'shared/ui/Button'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAddCommentFormError,
    getAddCommentFormText
} from '../model/selectors/addCommentFormSelectors'
import { addCommentFormReducer, addCommentFormActions } from '../model/slices/addCommentFormSlice'

export interface IAddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}
const reducers: TReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: IAddCommentFormProps) => {
    const { className, onSendComment } = props
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSandHandler = useCallback(() => {
        onSendComment(text ?? '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers} >
            <div className={clsx([s.AddCommentForm, className])}>
                <Input
                    label={t('enter the text of the comment')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={s.input}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onSandHandler}
                >{t('send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
