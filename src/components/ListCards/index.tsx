import React, { Dispatch, SetStateAction } from "react";
import { ItemCard } from "..";
import style from "./style";

type ListCardsProps = {
  options: string[];
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

function ListCards({ options, title, setValue, value }: ListCardsProps) {
  return (
    <div style={{ ...style.Container, flexDirection: "column" }}>
      <p style={style.Title}>{title.toLocaleUpperCase() + ":"}</p>
      <div style={{ ...style.SubContainer, flexWrap: "wrap" }}>
        {options.map((item, index) => (
          <ItemCard key={index} value={value} setValue={setValue} name={item} />
        ))}
      </div>
    </div>
  );
}

export default ListCards;
