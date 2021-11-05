import React, { useContext } from "react";
import { MainModal, OutlinedButton, ListOrder } from "../../components";
import { Global } from "../../context/GlobalContext";

const PRIZE_NAMES = [
  "Pequeno (300ml)",
  "Média (500ml)",
  "Grande (700ml)",
  "Morango",
  "Banana",
  "Kiwi",
  "Granola",
  "Paçoca",
  "Leite ninho",
];
const PRIZE_TABLE = [3, 5, 7, 3, 1, 2, 2, 1, 2];

function Tela3() {
  const { contextValues } = useContext(Global);

  const acai = {
    tamanho: contextValues[2]?.values,
    sabor: contextValues[1]?.values,
    personalizacao: contextValues[0]?.values,
  };

  const prize =
    PRIZE_TABLE[PRIZE_NAMES.indexOf(acai?.tamanho)] +
    PRIZE_TABLE[PRIZE_NAMES.indexOf(acai?.sabor)] +
    PRIZE_TABLE[PRIZE_NAMES.indexOf(acai?.personalizacao)];

  return (
    <MainModal title="Escolha seu açai">
      <ListOrder options={contextValues} />
      <p style={{ color: "purple" }}>Valor total: R$ {prize ? prize : 0},00</p>
      <p style={{ color: "purple" }}>Tempo de preparo: 10min</p>
      <OutlinedButton isSubmit={false} title="Refazer pedido" />
    </MainModal>
  );
}

export default Tela3;
