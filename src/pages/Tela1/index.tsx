import React, { useState } from "react";
import { MainModal, OutlinedButton, ListCards } from "../../components";

function Tela1() {
  const [flavor, setFlavor] = useState("Morango");
  const [size, setSize] = useState("Pequeno (300ml)");

  return (
    <MainModal title="Escolha seu açai">
      <ListCards
        setValue={setFlavor}
        value={flavor}
        title="Sabor"
        options={["Morango", "Banana", "Kiwi"]}
      />
      <ListCards
        setValue={setSize}
        value={size}
        title="Tamanho"
        options={["Pequeno (300ml)", "Média (500ml)", "Grande (700ml)"]}
      />
      <OutlinedButton
        isSubmit={true}
        values={[
          { name: "Sabor", values: flavor },
          { name: "Tamanho", values: size },
        ]}
        title="Avançar"
      />
    </MainModal>
  );
}

export default Tela1;
