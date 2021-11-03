import React from "react";
import style from "./style";

function Backdrop() {
  return <div style={{ ...style.Container, position: "absolute" }} />;
}

export default Backdrop;
