import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const closeModal = () => setIsAuthModal(false);
    const openModal = () => setIsAuthModal(true);

    return (
        <div className={classNames(s.navbar, {}, [])}>
            <div className={s.links}>
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={openModal}
                >
                    {t('signIn')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={closeModal} />
        </div>
    );
};
