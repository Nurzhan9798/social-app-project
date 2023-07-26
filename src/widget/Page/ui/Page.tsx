import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getScrollRestorationByPath, scrollRestorationActions } from 'features/ScrollRestoration';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scrollTop = useSelector((state: StateSchema) => getScrollRestorationByPath(state, pathname));

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollTop;
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestorationActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
