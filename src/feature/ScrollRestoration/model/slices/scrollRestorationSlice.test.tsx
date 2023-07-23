import { ScrollRestorationSchema, ScrollSchema } from '../types/scrollRestorationSchema';
import { scrollRestorationActions, scrollRestorationReducer } from './scrollRestorationSlice';

describe('scrollRestorationSlice.test', () => {
    test('setScrollPosition', () => {
        const data: ScrollSchema = {};
        data.page = 221;
        const state: DeepPartial<ScrollRestorationSchema> = { scroll: data };
        expect(scrollRestorationReducer(
            state as ScrollRestorationSchema,
            scrollRestorationActions.setScrollPosition({ path: 'page', position: 500 }),
        )).toEqual({
            scroll: {
                page: 500,
            },
        });
    });
    test('setScrollPosition with empty', () => {
        const data: ScrollSchema = {};
        const state: DeepPartial<ScrollRestorationSchema> = { scroll: data };
        expect(scrollRestorationReducer(
            state as ScrollRestorationSchema,
            scrollRestorationActions.setScrollPosition({ path: 'page', position: 500 }),
        )).toEqual({
            scroll: {
                page: 500,
            },
        });
    });
});
