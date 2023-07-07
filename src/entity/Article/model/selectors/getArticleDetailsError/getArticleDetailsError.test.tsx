import { StateScheme } from 'app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateScheme)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsError(state as StateScheme)).toEqual(undefined);
    });
});
