import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <TransactionProvider>
        <Header onOpenNewTransacionModal={ handleOpenNewTransactionModal }/>
        <Dashboard />
        <NewTransactionModal 
        isOpenProp={ isNewTransactionModalOpen }
        onRequestCloseProp = { handleCloseNewTransactionModal }
        />
        <GlobalStyle />
      </TransactionProvider>
    </div>
  )
}
