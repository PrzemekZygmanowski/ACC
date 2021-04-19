import React, { Suspense, FC } from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import NewProjectForm from './NewProjectForm';
import { newProjectFormT } from './NewProjectForm';

export default {
  component: NewProjectForm,
  title: 'Components/NewProject/NewProjectForm',
  decorators: [
    (StoryComponent) => (
      <Suspense fallback={<div>Loading</div>}>
        <StoryComponent />
      </Suspense>
    ),
  ],
} as Meta;

const Template: Story<newProjectFormT> = (args) => <NewProjectForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  values: {
    projectTitle: 'New Project',
    weatherStation: 'city 123',
  },
  onSubmit: () => {
    /* ignore */
  },
};
