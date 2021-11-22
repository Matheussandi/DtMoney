import Modal from 'react-modal';
import { Container } from './styles';

interface INewTransactionModalProps {
    isOpenProp: boolean;
    onRequestCloseProp: () => void;
}

export function NewTransactionModal({ isOpenProp, onRequestCloseProp }: INewTransactionModalProps) {
    return (
        <Modal
            // isOpen={isNewTransactionModalOpen}
            isOpen={isOpenProp}
            // onRequestClose={handleCloseNewTransactionModal}
            onRequestClose={onRequestCloseProp}
            overlayClassName="react-modal-overlay" // parte externa do modal
            className="react-modal-content" // configuração interna do modal
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                />

                <input
                    placeholder="Valor"
                />

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}