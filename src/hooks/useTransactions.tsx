import { api } from '../services/api';
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

interface ITransaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface ITransactionContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionProviderProps {
    children: ReactNode;
}

const TransactionsContext = createContext<ITransactionContextData>({} as ITransactionContextData);

export function TransactionProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(res => setTransactions(res.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data
        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            { children }
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}