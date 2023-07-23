import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entity/Article';
import {
    getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageLimit,
    getArticlesPageLoading,
    getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
    test('getArticlesPageLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageLoading(state as StateSchema)).toEqual(true);
    });
    test('getArticlesPageLoading with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageLoading(state as StateSchema)).toEqual(false);
    });
    test('getArticlesPageError', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { error: 'error' },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });
    test('getArticlesPageError with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });
    test('getArticlesPageView', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { view: ArticleView.LIST },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.LIST);
    });
    test('getArticlesPageView with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.CARD);
    });
    test('getArticlesPageNumber', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { page: 2 },
        };
        expect(getArticlesPageNumber(state as StateSchema)).toEqual(2);
    });
    test('getArticlesPageNumber with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageNumber(state as StateSchema)).toEqual(1);
    });
    test('getArticlesPageLimit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { limit: 6 },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(6);
    });
    test('getArticlesPageNumber with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
    });
    test('getArticlesPageHasMore', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { hasMore: false },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false);
    });
    test('getArticlesPageHasMore with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
    });
    test('getArticlesPageInited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { _inited: true },
        };
        expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
    });
    test('getArticlesPageInited with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageInited(state as StateSchema)).toEqual(undefined);
    });
    test('getArticlesPageSearch', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { search: 'sdfd' },
        };
        expect(getArticlesPageSearch(state as StateSchema)).toEqual('sdfd');
    });
    test('getArticlesPageSearch with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageSearch(state as StateSchema)).toEqual('');
    });
    test('getArticlesPageSort', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { sort: ArticleSortField.TITLE },
        };
        expect(getArticlesPageSort(state as StateSchema)).toEqual(ArticleSortField.TITLE);
    });
    test('getArticlesPageSort with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageSort(state as StateSchema)).toEqual(ArticleSortField.CREATED);
    });
    test('getArticlesPageOrder', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { order: 'desc' },
        };
        expect(getArticlesPageOrder(state as StateSchema)).toEqual('desc');
    });
    test('getArticlesPageOrder with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageOrder(state as StateSchema)).toEqual('asc');
    });
    test('getArticlesPageType', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: { type: ArticleType.ECONOMICS },
        };
        expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ECONOMICS);
    });
    test('getArticlesPageType with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ALL);
    });
});
