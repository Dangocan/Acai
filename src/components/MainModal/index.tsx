import React, { ReactElement } from "react";
import style from "./style";

type MainModalProps = {
  children: ReactElement | ReactElement[];
  title: string;
};

function MainModal({ title, children }: MainModalProps) {
  return (
    <div
      style={{
        ...style.Container,
        flexDirection: "column",
        borderRadius: "5px",
        position: "absolute",
      }}
    >
      <h1 style={{ ...style.Title, textAlign: "center" }}>{title}</h1>
      {children}
    </div>
  );
}

export default MainModal;
