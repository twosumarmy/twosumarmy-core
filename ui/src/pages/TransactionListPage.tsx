import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTransactions } from "../redux/reducers/transactionSlice";
import { AppLayout } from "../components/AppLayout/AppLayout";
import Table from "../components/Table";

export const TransactionListPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const render = (): React.ReactElement => {
    return <AppLayout>{renderTable()}</AppLayout>;
  };

  const renderTable = (): React.ReactElement => {
    return (
      <Table.Container>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Purpose</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {transactions.map((transaction, index) => (
            <Table.Row key={index}>
              <Table.DataCell>{transaction.value_date}</Table.DataCell>
              <Table.DataCell fontWeight="medium">
                {transaction.receiver_name}
              </Table.DataCell>
              <Table.DataCell>
                {transaction.purpose.slice(0, 30)}
              </Table.DataCell>
              <Table.DataCell>{transaction.transaction_type}</Table.DataCell>
              <Table.DataCell>{transaction.amount} €</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Container>
    );
  };

  return render();
};
