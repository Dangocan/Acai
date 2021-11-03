import React from "react";
import { ItemCard } from "..";
import style from "./style";

type ListCardsProps = {
  options: string[];
  title: string;
};

function ListCards({ options, title }: ListCardsProps) {
  return (
    <div style={{ ...style.Container, flexDirection: "column" }}>
      <p style={style.Title}>{title.toLocaleUpperCase() + ":"}</p>
      <div style={{ ...style.SubContainer, flexWrap: "wrap" }}>
        {options.map((item) => (
          <ItemCard name={item} />
        ))}
      </div>
    </div>
  );
}

export default ListCards;
