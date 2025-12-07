"use client";
import styled from "styled-components";
import { useMemo } from "react";
import { useGetTransactions } from "@/modules/transactions/application/useGetTransactions";
import { useTransactionStore } from "@/store/transaction.store";

import DashboardCard from "./components/DashboardCard";
import DashboardTable from "./components/DashboardTable";

const PageWrapper = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  background: #f9fafb;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111827;
`;

export default function DashboardPage() {
  useGetTransactions();
  const list = useTransactionStore((s) => s.list);

  const { income, expense, balance } = useMemo(() => {
    const income = list
      .filter((l) => l.type === "income")
      .reduce((a, b) => a + Number(b.amount), 0);

    const expense = list
      .filter((l) => l.type === "expense")
      .reduce((a, b) => a + Number(b.amount), 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [list]);

  return (
    <PageWrapper>
      <Title>Dashboard</Title>

      <CardsGrid>
        <DashboardCard label="Income" value={`$${income}`} color="#10b981" />
        <DashboardCard label="Expense" value={`$${expense}`} color="#ef4444" />
        <DashboardCard label="Balance" value={`$${balance}`} color="#3b82f6" />
      </CardsGrid>

      <DashboardTable data={list} />
    </PageWrapper>
  );
}

