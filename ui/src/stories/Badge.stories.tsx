import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>Badge</Badge>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
};
