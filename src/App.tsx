import React from "react";
import { Backdrop } from "./components";
import GlobalContext from "./context/GlobalContext";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Tela1, Tela2, Tela3 } from "./pages";

function App() {
  return (
    <>
      <Backdrop />
      <GlobalContext>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Tela1 />
            </Route>
            <Route path="/additional">
              <Tela2 />
            </Route>
            <Route path="/checkout">
              <Tela3 />
            </Route>
          </Switch>
        </BrowserRouter>
      </GlobalContext>
    </>
  );
}

export default App;
