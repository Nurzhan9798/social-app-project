import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entity/Article';
import {
    getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageLimit,
    getArticlesPageLoading,
    getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
    test('getArticlesPageLoading', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageLoading(state as StateScheme)).toEqual(true);
    });
    test('getArticlesPageLoading with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageLoading(state as StateScheme)).toEqual(false);
    });
    test('getArticlesPageError', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { error: 'error' },
        };
        expect(getArticlesPageError(state as StateScheme)).toEqual('error');
    });
    test('getArticlesPageError with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageError(state as StateScheme)).toEqual(undefined);
    });
    test('getArticlesPageView', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { view: ArticleView.LIST },
        };
        expect(getArticlesPageView(state as StateScheme)).toEqual(ArticleView.LIST);
    });
    test('getArticlesPageView with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageView(state as StateScheme)).toEqual(ArticleView.CARD);
    });
    test('getArticlesPageNumber', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { page: 2 },
        };
        expect(getArticlesPageNumber(state as StateScheme)).toEqual(2);
    });
    test('getArticlesPageNumber with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageNumber(state as StateScheme)).toEqual(1);
    });
    test('getArticlesPageLimit', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { limit: 6 },
        };
        expect(getArticlesPageLimit(state as StateScheme)).toEqual(6);
    });
    test('getArticlesPageNumber with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageLimit(state as StateScheme)).toEqual(9);
    });
    test('getArticlesPageHasMore', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { hasMore: false },
        };
        expect(getArticlesPageHasMore(state as StateScheme)).toEqual(false);
    });
    test('getArticlesPageHasMore with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageHasMore(state as StateScheme)).toEqual(undefined);
    });
    test('getArticlesPageInited', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { _inited: true },
        };
        expect(getArticlesPageInited(state as StateScheme)).toEqual(true);
    });
    test('getArticlesPageInited with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageInited(state as StateScheme)).toEqual(undefined);
    });
    test('getArticlesPageSearch', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { search: 'sdfd' },
        };
        expect(getArticlesPageSearch(state as StateScheme)).toEqual('sdfd');
    });
    test('getArticlesPageSearch with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageSearch(state as StateScheme)).toEqual('');
    });
    test('getArticlesPageSort', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { sort: ArticleSortField.TITLE },
        };
        expect(getArticlesPageSort(state as StateScheme)).toEqual(ArticleSortField.TITLE);
    });
    test('getArticlesPageSort with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageSort(state as StateScheme)).toEqual(ArticleSortField.CREATED);
    });
    test('getArticlesPageOrder', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { order: 'desc' },
        };
        expect(getArticlesPageOrder(state as StateScheme)).toEqual('desc');
    });
    test('getArticlesPageOrder with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageOrder(state as StateScheme)).toEqual('asc');
    });
    test('getArticlesPageType', () => {
        const state: DeepPartial<StateScheme> = {
            articlesPage: { type: ArticleType.ECONOMICS },
        };
        expect(getArticlesPageType(state as StateScheme)).toEqual(ArticleType.ECONOMICS);
    });
    test('getArticlesPageType with empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticlesPageType(state as StateScheme)).toEqual(ArticleType.ALL);
    });
});
