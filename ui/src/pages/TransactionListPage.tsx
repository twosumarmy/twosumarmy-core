import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTransactions } from "../redux/reducers/transactionSlice";
import Table from "../components/Table";
import { Transaction } from "../generated";
import { Money } from "../lib/money";
import { MoneyBadge } from "../components/Badge/MoneyBadge";
import { Badge } from "../components/Badge/Badge";

export const TransactionListPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const render = (): React.ReactElement => {
    return <div>{renderTable()}</div>;
  };

  const renderTable = (): React.ReactElement => {
    return (
      <Table.Container>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Purpose</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {transactions.map((transaction) => renderRow(transaction))}
        </Table.Body>
      </Table.Container>
    );
  };

  const renderRow = (transaction: Transaction): React.ReactElement => {
    const money = new Money(transaction.amount, "EUR");
    return (
      <Table.Row key={transaction.id}>
        <Table.DataCell>{transaction.value_date}</Table.DataCell>
        <Table.DataCell fontWeight="medium">
          {transaction.receiver_name.slice(0, 30)}
        </Table.DataCell>
        <Table.DataCell>{transaction.purpose.slice(0, 30)}</Table.DataCell>
        <Table.DataCell>
          {<Badge variant="white">{transaction.type}</Badge>}
        </Table.DataCell>
        <Table.DataCell>{transaction.category}</Table.DataCell>
        <Table.DataCell>{<MoneyBadge money={money} />}</Table.DataCell>
      </Table.Row>
    );
  };

  return render();
};
