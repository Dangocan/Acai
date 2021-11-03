import React from "react";
import { MainModal, OutlinedButton, ListCards } from "../../components";

function Tela2() {
  return (
    <MainModal title="Personalize seu açai">
      <ListCards
        title="Personalização"
        options={["Granola", "Paçoca", "Leite ninho"]}
      />
      <OutlinedButton title="Finalizar pedido" />
    </MainModal>
  );
}

export default Tela2;
