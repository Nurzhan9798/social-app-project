import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entity/Comment';

export interface ArticlDetailsCommentsScheme extends EntityState<Comment>{
    isLoading: boolean;
    error?: string;
}
