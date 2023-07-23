import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsLoading } from './getArticleDetailsLoading';

describe('getArticleDetailsLoading.test', () => {
    test('isLoading is true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
    });

    test('isLoading is false', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
            },
        };
        expect(getArticleDetailsLoading(state as StateSchema)).toEqual(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsLoading(state as StateSchema)).toEqual(false);
    });
});
