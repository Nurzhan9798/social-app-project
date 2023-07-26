import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleComments } from './ArticleComments';

export default {
    title: 'features/ArticleComments',
    component: ArticleComments,
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
