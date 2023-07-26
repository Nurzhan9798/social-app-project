import { StateSchema } from 'app/providers/StoreProvider';
import { getAddNewCommentText, getAddNewCommentError } from './addNewCommentSelectors';

describe('addNewCommentSelectors test', () => {
    test('getAddNewCommentText success', () => {
        const data = 'text';
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: data,
            },
        };
        expect(getAddNewCommentText(state as StateSchema)).toEqual(data);
    });
    test('getAddNewCommentText with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddNewCommentText(state as StateSchema)).toEqual('');
    });
    test('getAddNewCommentError success', () => {
        const data = 'error';
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                error: data,
            },
        };
        expect(getAddNewCommentError(state as StateSchema)).toEqual(data);
    });
    test('getAddNewCommentError with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddNewCommentError(state as StateSchema)).toEqual(undefined);
    });
});
