import { useState } from 'react';

import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IHeaderProps {
    onOpenNewTransacionModal: () => void;
    onIsNewTransactionModalClose: boolean;
    curso: string;

}

export function Header({ onOpenNewTransacionModal, onIsNewTransactionModalClose, curso}: IHeaderProps) {
    return ( 
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransacionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}