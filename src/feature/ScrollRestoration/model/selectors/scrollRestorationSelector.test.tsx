import { StateScheme } from 'app/providers/StoreProvider';
import { getScrollRestoration, getScrollRestorationByPath } from 'feature/ScrollRestoration';
import { ScrollRestorationScheme, ScrollScheme } from '../types/scrollRestoration';

describe('scrollRestorationSelector.test', () => {
    test('getScrollRestoration', () => {
        const data: ScrollScheme = {};
        data.page = 221;
        const state: DeepPartial<StateScheme> = {
            scrollRestoration: {
                scroll: data,
            },
        };
        expect(getScrollRestoration(state as StateScheme)).toEqual(data);
    });
    test('getScrollRestoration with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getScrollRestoration(state as StateScheme)).toEqual(undefined);
    });

    test('getScrollRestorationByPath', () => {
        const data: ScrollScheme = {};
        data.page = 221;
        const state: DeepPartial<StateScheme> = {
            scrollRestoration: {
                scroll: data,
            },
        };
        expect(getScrollRestorationByPath(state as StateScheme, 'page')).toEqual(221);
    });
    test('getScrollRestorationByPath with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getScrollRestorationByPath(state as StateScheme, 'page')).toEqual(0);
    });
});
