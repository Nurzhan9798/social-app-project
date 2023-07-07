import { StateScheme } from 'app/providers/StoreProvider';
import { getArticleDetailsLoading } from './getArticleDetailsLoading';

describe('getArticleDetailsLoading.test', () => {
    test('isLoading is true', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsLoading(state as StateScheme)).toEqual(true);
    });

    test('isLoading is false', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                isLoading: false,
            },
        };
        expect(getArticleDetailsLoading(state as StateScheme)).toEqual(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsLoading(state as StateScheme)).toEqual(false);
    });
});
