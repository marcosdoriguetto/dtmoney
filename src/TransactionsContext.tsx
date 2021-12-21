import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

type TransactionsType = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionsInput = Omit<TransactionsType, 'id' | 'createdAt'>;

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: TransactionsType[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionsInput) {    
    const response = await api.post('/transactions', transactionInput);
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}