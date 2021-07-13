import { Story, Meta } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';

export default {
  title: 'Example/Accordion',
  component: Accordion
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args}>Content</Accordion>;

export const Default = Template.bind({});
Default.args = {
  title: 'sasas',
  id: 'accordionLink',
  ariaControls: 'accordionPanel',
  ariaLabelledBy: 'accordionLink'
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  expanded: true
};