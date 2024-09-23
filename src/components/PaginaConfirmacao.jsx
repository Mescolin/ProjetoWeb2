import React, { useState } from 'react';
import FormConfirma from './forms/FormConfirma';

const PaginaConfirmacao = () => {
  const [pedidos, setPedidos] = useState([
    {
      nome: 'Grande',
      sabor: 'Portuguesa 1/2 Frango com Catupiry',
      tomate: 'Sim',
      cebola: 'Não',
      milho: 'Sim',
      valor: 'R$ 49,90'
    },
    {
      nome: 'Média',
      sabor: 'Calabresa',
      tomate: 'Não',
      cebola: 'Sim',
      milho: 'Sim',
      valor: 'R$ 39,90'
    },
    {
      nome: 'Gigante',
      sabor: 'Quatro Queijos',
      tomate: 'Sim',
      cebola: 'Não',
      milho: 'Não',
      valor: 'R$ 59,90'
    }
  ]);

  const handleConfirmar = () => {
    alert('Pedidos confirmados!');
  };

  const handleCancelar = () => {
    alert('Pedido cancelado.');
  };

  return (
    <FormConfirma
      pedidos={pedidos}
      onConfirmar={handleConfirmar}
      onCancelar={handleCancelar}
    />
  );
};

export default PaginaConfirmacao;
