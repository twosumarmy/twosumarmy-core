import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const White = Template.bind({});
White.args = {
  variant: "white",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};
