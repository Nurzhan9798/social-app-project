import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from 'feature/AuthByUsername/ui/LoginForm/LoginFormAsync';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
