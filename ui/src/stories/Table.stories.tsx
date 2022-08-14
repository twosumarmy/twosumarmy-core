import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "../components/Table";

export default {
  title: "Components/Table",
  component: Table.Container,
  argTypes: {},
} as ComponentMeta<typeof Table.Container>;

const Template: ComponentStory<typeof Table.Container> = (args) => (
  <Table.Container {...args}>
    <Table.Head>
      <Table.HeadCell>Transaction ID</Table.HeadCell>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Company</Table.HeadCell>
      <Table.HeadCell>Purpose</Table.HeadCell>
      <Table.HeadCell>IBAN</Table.HeadCell>
      <Table.HeadCell>Amount</Table.HeadCell>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.DataCell>4HJK3N</Table.DataCell>
        <Table.DataCell>27.07.22</Table.DataCell>
        <Table.DataCell fontWeight="medium">REWE</Table.DataCell>
        <Table.DataCell>Healthy fruits</Table.DataCell>
        <Table.DataCell>DE432143214321</Table.DataCell>
        <Table.DataCell>+ 4.99 €</Table.DataCell>
      </Table.Row>
      <Table.Row>
        <Table.DataCell>4HJK3N</Table.DataCell>
        <Table.DataCell>28.07.22</Table.DataCell>
        <Table.DataCell fontWeight="medium">Netflix</Table.DataCell>
        <Table.DataCell>Monthly subscription</Table.DataCell>
        <Table.DataCell>DE123412341234</Table.DataCell>
        <Table.DataCell>- 17.99 €</Table.DataCell>
      </Table.Row>
    </Table.Body>
  </Table.Container>
);

export const Default = Template.bind({});
Default.args = {};
