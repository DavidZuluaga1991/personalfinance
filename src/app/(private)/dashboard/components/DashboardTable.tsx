"use client";
import { Transaction } from "@/modules/transactions/domain/transaction.model";
import styled from "styled-components";

const TableWrapper = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th {
    background: #f8f9fc;
    padding: 12px;
    text-align: left;
    font-weight: 600;
    color: #444;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
`;

interface Props {
  title?: string;
  data: Transaction[];
}

export default function TransactionTable({ title = "Latest Transactions", data }: Props) {
  return (
    <TableWrapper>
      <h2 className="font-semibold mb-2">Recent Transactions</h2>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((t) => (
            <tr key={t.id}>
                <td>{t.title}</td>
                <td>${t.amount}</td>
                <td>{t.type}</td>
                <td>{t.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
