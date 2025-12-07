"use client";

import { useEffect } from "react";
import { transactionApi } from "../infrastructure/transaction.api";
import { useTransactionStore } from "@/store/transaction.store";

export const useGetTransactions = () => {
  const setList = useTransactionStore((s) => s.setList);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await transactionApi.list();
        if (mounted) setList(data);
      } catch (err) {
        console.error("Error fetching transactions", err);
      }
    })();
    return () => { mounted = false; };
  }, [setList]);
};
