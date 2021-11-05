import React, { useState } from "react";
import { MainModal, OutlinedButton, ListCards } from "../../components";

function Tela2() {
  const [additional, setAdditional] = useState("Granola");

  return (
    <MainModal title="Personalize seu açai">
      <ListCards
        setValue={setAdditional}
        value={additional}
        title="Personalização"
        options={["Granola", "Paçoca", "Leite ninho"]}
      />
      <OutlinedButton
        isSubmit={true}
        values={[{ name: "Personalização", values: additional }]}
        title="Finalizar pedido"
      />
    </MainModal>
  );
}

export default Tela2;
