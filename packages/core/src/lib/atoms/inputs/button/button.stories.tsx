import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
