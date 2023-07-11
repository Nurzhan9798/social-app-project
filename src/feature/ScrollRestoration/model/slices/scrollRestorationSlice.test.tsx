import { ScrollRestorationScheme, ScrollScheme } from '../types/scrollRestoration';
import { scrollRestorationActions, scrollRestorationReducer } from './scrollRestorationSlice';

describe('scrollRestorationSlice.test', () => {
    test('setScrollPosition', () => {
        const data: ScrollScheme = {};
        data.page = 221;
        const state: DeepPartial<ScrollRestorationScheme> = { scroll: data };
        expect(scrollRestorationReducer(
            state as ScrollRestorationScheme,
            scrollRestorationActions.setScrollPosition({ path: 'page', position: 500 }),
        )).toEqual({
            scroll: {
                page: 500,
            },
        });
    });
    test('setScrollPosition with empty', () => {
        const data: ScrollScheme = {};
        const state: DeepPartial<ScrollRestorationScheme> = { scroll: data };
        expect(scrollRestorationReducer(
            state as ScrollRestorationScheme,
            scrollRestorationActions.setScrollPosition({ path: 'page', position: 500 }),
        )).toEqual({
            scroll: {
                page: 500,
            },
        });
    });
});
