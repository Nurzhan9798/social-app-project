import { ArticlDetailsCommentsSchema } from './ArticlDetailsCommentsSchema';
import {
    ArticleDetailsRecomendationsSchema,
} from './ArticleDetailsRecomendationsSchema';

export interface ArticleDetailsPageSchema {
    comment: ArticlDetailsCommentsSchema,
    recommendations: ArticleDetailsRecomendationsSchema
}
