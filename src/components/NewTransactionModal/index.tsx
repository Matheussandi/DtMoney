import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg';
import closeImg from '../../assets/close.svg';
import { useState, FormEvent } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

interface INewTransactionModalProps {
    isOpenProp: boolean;
    onRequestCloseProp: () => void;
}

export function NewTransactionModal({ isOpenProp, onRequestCloseProp }: INewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault();
        await createTransaction({
          title,
          amount,
          category,
          type
        })
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit')
        onRequestCloseProp();
      }

    return (
        <Modal
            // isOpen={isNewTransactionModalOpen}
            isOpen={isOpenProp}
            // onRequestClose={handleCloseNewTransactionModal}
            onRequestClose={onRequestCloseProp}
            overlayClassName="react-modal-overlay" // parte externa do modal
            className="react-modal-content" // configuração interna do modal
        >

            <button 
                type="button"
                onClick={onRequestCloseProp}
                className="react-modal-close"
            >
                <img src={ closeImg } alt="close modal" />
            </button>
            
            <Container onSubmit={ handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                    
                <input
                    placeholder="Título"
                    value={ title }
                    onChange={ e => setTitle(e.target.value)}
                />

                <input
                    placeholder="Valor"
                    type="number"
                    value={ amount }
                    onChange={ e => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={ () => {setType("deposit")}}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={ incomeImg } alt="Input" />
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={ () => {setType("withdraw")}}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={ outcomeImg } alt="Output" />

                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={ category }
                    onChange={ e => setCategory(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}
