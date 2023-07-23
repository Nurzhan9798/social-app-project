import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';
import { Article, ArticleBlockType, ArticleType } from '../../types/article';

describe('getArticleDetailsData.test', () => {
    test('success', () => {
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
        const state: DeepPartial<StateSchema> = {
            articleDetails: { data },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
