import { StateScheme } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRestoration = (state: StateScheme) => state.scrollRestoration?.scroll;
export const getScrollRestorationByPath = createSelector(
    getScrollRestoration,
    (state: StateScheme, path: string) => path,
    (scroll, path) => {
        if (!scroll) return 0;
        return scroll[path];
    },
);
