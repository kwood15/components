import { Story, Meta } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';
// // import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: 'Test',
};


