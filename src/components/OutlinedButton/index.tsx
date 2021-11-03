import React from "react";
import style from "./style";

type OutlinedButtonProps = {
  title: string;
};

function OutlinedButton({ title }: OutlinedButtonProps) {
  return <button style={style.Container}>{title}</button>;
}

export default OutlinedButton;
