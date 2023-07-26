import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollRestoration, getScrollRestorationByPath } from '../selectors/scrollRestorationSelector';
import { ScrollRestorationSchema, ScrollSchema } from '../types/scrollRestorationSchema';

describe('scrollRestorationSelector.test', () => {
    test('getScrollRestoration', () => {
        const data: ScrollSchema = {};
        data.page = 221;
        const state: DeepPartial<StateSchema> = {
            scrollRestoration: {
                scroll: data,
            },
        };
        expect(getScrollRestoration(state as StateSchema)).toEqual(data);
    });
    test('getScrollRestoration with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getScrollRestoration(state as StateSchema)).toEqual(undefined);
    });

    test('getScrollRestorationByPath', () => {
        const data: ScrollSchema = {};
        data.page = 221;
        const state: DeepPartial<StateSchema> = {
            scrollRestoration: {
                scroll: data,
            },
        };
        expect(getScrollRestorationByPath(state as StateSchema, 'page')).toEqual(221);
    });
    test('getScrollRestorationByPath with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getScrollRestorationByPath(state as StateSchema, 'page')).toEqual(0);
    });
});
