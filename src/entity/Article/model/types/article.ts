import { User } from 'entity/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
}

interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleBlockType.CODE
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleVideoBlock extends ArticleBlockBase {
    type: ArticleBlockType.VIDEO;
    src: string;
}

export type ArticleBlock = ArticleCodeBlock |
    ArticleTextBlock |
    ArticleImageBlock |
    ArticleVideoBlock;

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export enum ArticleView {
    CARD = 'CARD',
    LIST = 'LIST'
}

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}
