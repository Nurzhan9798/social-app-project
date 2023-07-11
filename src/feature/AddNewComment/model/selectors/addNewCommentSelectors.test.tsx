import { StateScheme } from 'app/providers/StoreProvider';
import { getAddNewCommentText, getAddNewCommentError } from './addNewCommentSelectors';

describe('addNewCommentSelectors test', () => {
    test('getAddNewCommentText success', () => {
        const data = 'text';
        const state: DeepPartial<StateScheme> = {
            addNewComment: {
                text: data,
            },
        };
        expect(getAddNewCommentText(state as StateScheme)).toEqual(data);
    });
    test('getAddNewCommentText with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getAddNewCommentText(state as StateScheme)).toEqual('');
    });
    test('getAddNewCommentError success', () => {
        const data = 'error';
        const state: DeepPartial<StateScheme> = {
            addNewComment: {
                error: data,
            },
        };
        expect(getAddNewCommentError(state as StateScheme)).toEqual(data);
    });
    test('getAddNewCommentError with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getAddNewCommentError(state as StateScheme)).toEqual(undefined);
    });
});
