import React from 'react';

import { Alert } from './Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    ohNoColor: { control: 'color' },
  },
};

const Template = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
  title: "Be Warned",
  text: "Something not ideal might be happening."
};