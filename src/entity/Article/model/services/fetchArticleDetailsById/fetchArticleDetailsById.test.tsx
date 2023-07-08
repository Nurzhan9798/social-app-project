import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Article, ArticleBlockType, ArticleType } from 'entity/Article/model/types/article';
import { fetchArticleDetailsById } from './fetchArticleDetailsById';

const data: Article = {
    id: '1',
    createdAt: '12.05.2023',
    title: 'Article 1',
    img: '',
    type: [ArticleType.IT],
    views: 20,
    user: {
        id: '1',
        username: 'nurzhan',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            paragraphs: ['paragraph'],
        },
    ],
    subtitle: '',
};
describe('fetchArticleDetailsById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailsById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailsById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
