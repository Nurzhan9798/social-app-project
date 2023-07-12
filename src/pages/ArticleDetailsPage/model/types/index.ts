import { ArticlDetailsCommentsScheme } from './ArticlDetailsCommentsScheme';
import {
    ArticleDetailsRecomendationsScheme,
} from './ArticleDetailsRecomendationsScheme';

export interface ArticleDetailsPageScheme {
    comment: ArticlDetailsCommentsScheme,
    recommendations: ArticleDetailsRecomendationsScheme
}
