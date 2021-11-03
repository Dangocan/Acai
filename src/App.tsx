import React from "react";
import { Backdrop } from "./components";
import GlobalContext from "./context/GlobalContext";
import { Tela1, Tela2, Tela3 } from "./pages";

function App() {
  return (
    <>
      <Backdrop />
      <GlobalContext>
        <Tela1 />
        <Tela2 />
        <Tela3 />
      </GlobalContext>
    </>
  );
}

export default App;
