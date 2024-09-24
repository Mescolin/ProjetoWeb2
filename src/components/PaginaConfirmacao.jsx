import React, { useContext } from 'react';
import FormConfirma from './forms/FormConfirma';
import { CartContext } from '../contexts/CartContext';

const PaginaConfirmacao = () => {
  const { cart } = useContext(CartContext);

  return (
    <FormConfirma pedidos={cart} />
  );
};

export default PaginaConfirmacao;