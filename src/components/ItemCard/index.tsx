import React from "react";
import style from "./style";

type ItemCardProps = {
  name: string;
};

function ItemCard({ name }: ItemCardProps) {
  return (
    <div style={style.Container}>
      <p style={style.Text}>{name}</p>
    </div>
  );
}

export default ItemCard;
