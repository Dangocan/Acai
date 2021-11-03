import React from "react";
import { MainModal, OutlinedButton, ListCards } from "../../components";

function Tela1() {
  return (
    <MainModal title="Escolha seu açai">
      <ListCards title="Sabor" options={["Morango", "Banana", "Kiwi"]} />
      <ListCards
        title="Tamanho"
        options={["Pequeno (300ml)", "Média (500ml)", "Grande (700ml)"]}
      />
      <OutlinedButton title="Avançar" />
    </MainModal>
  );
}

export default Tela1;
