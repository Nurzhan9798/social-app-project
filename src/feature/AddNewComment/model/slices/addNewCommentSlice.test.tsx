import { AddNewCommentScheme } from '../types/addNewCommentScheme';
import { addNewCommentActions, addNewCommentReducers } from './addNewCommentSlice';

describe('addNewCommentSlice.test', () => {
    test('set text success', () => {
        const state: DeepPartial<AddNewCommentScheme> = { text: '123' };
        expect(
            addNewCommentReducers(
                state as AddNewCommentScheme,
                addNewCommentActions.setText('321'),
            ),
        ).toEqual({
            text: '321',
        });
    });
});
