import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForbiddenPage } from './ForbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage />;

export const Normal = Template.bind({});
Normal.args = {};
