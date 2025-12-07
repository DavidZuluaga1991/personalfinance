import { Transaction } from "@/modules/transactions/domain/transaction.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TransactionState {
  list: Transaction[];

  setList: (items: Transaction[]) => void;
  add: (item: Transaction) => void;
  update: (id: string, item: Partial<Transaction>) => void;
  remove: (id: string) => void;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      list: [],

      // Reemplaza toda la lista (cuando vienes del backend)
      setList: (items) => set({ list: items }),

      // Agrega una nueva transacción
      add: (item) =>
        set((state) => ({
          list: [...state.list, item],
        })),

      // Actualiza una transacción por ID
      update: (id, newData) =>
        set((state) => ({
          list: state.list.map((t) =>
            t.id === id ? { ...t, ...newData } : t
          ),
        })),

      // Elimina transacción por ID
      remove: (id) =>
        set((state) => ({
          list: state.list.filter((t) => t.id !== id),
        })),
    }),
    {
      name: "transaction-storage", // se guarda en localStorage
    }
  )
);
