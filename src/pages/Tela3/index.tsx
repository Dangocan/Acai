import React from "react";
import { MainModal, OutlinedButton, ListOrder } from "../../components";

function Tela3() {
  return (
    <MainModal title="Escolha seu açai">
      <ListOrder
        options={[
          { name: "Tamanho", values: ["Médio (500ml)"] },
          { name: "Sabor", values: ["Morango"] },
          { name: "Tamanho", values: ["Paçoca", "leite ninho"] },
        ]}
      />
      <p style={{ color: "purple" }}>Valor total: R$ 16,00</p>
      <p style={{ color: "purple" }}>Tempo de preparo: 10min</p>
      <OutlinedButton title="Refazer pedido" />
    </MainModal>
  );
}

export default Tela3;
