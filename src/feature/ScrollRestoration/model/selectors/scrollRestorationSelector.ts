import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRestoration = (state: StateSchema) => state.scrollRestoration?.scroll;
export const getScrollRestorationByPath = createSelector(
    getScrollRestoration,
    (state: StateSchema, path: string) => path,
    (scroll, path) => {
        if (!scroll) return 0;
        return scroll[path];
    },
);
