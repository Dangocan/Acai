import React, { Dispatch, SetStateAction } from "react";
import style from "./style";

type ItemCardProps = {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

function ItemCard({ name, setValue, value }: ItemCardProps) {
  const onClick = () => {
    setValue(name);
  };

  return (
    <div
      onClick={onClick}
      style={value === name ? style.ContainerSelected : style.Container}
    >
      <p style={value === name ? style.TextSelected : style.Text}>{name}</p>
    </div>
  );
}

export default ItemCard;
