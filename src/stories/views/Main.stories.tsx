import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Main } from '../../views/main/Main';

export default {
  title: 'MainComponent',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main />;

export const LoggedIn = Template.bind({});