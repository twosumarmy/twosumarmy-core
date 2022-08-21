import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stats } from "../components/Stats/Stats";

export default {
  title: "Components/Stats",
  component: Stats,
  argTypes: {},
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => (
  <Stats {...args}>Stats</Stats>
);

export const Default = Template.bind({});
Default.args = {
  title: "Balance",
  stats: "100,00 €",
};
