import { AddNewCommentSchema } from '../types/addNewCommentSchema';
import { addNewCommentActions, addNewCommentReducers } from './addNewCommentSlice';

describe('addNewCommentSlice.test', () => {
    test('set text success', () => {
        const state: DeepPartial<AddNewCommentSchema> = { text: '123' };
        expect(
            addNewCommentReducers(
                state as AddNewCommentSchema,
                addNewCommentActions.setText('321'),
            ),
        ).toEqual({
            text: '321',
        });
    });
});
