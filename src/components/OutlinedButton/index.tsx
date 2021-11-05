import React, { useContext } from "react";
import style from "./style";
import { Global } from "../../context/GlobalContext";
import { useHistory, useLocation } from "react-router-dom";

type TValues = Array<{
  name: string;
  values: string;
}>;

type OutlinedButtonProps = {
  title: string;
  isSubmit: boolean;
  values?: TValues;
};

function OutlinedButton({ title, values, isSubmit }: OutlinedButtonProps) {
  const state = useContext(Global);
  const history = useHistory();
  const location = useLocation();

  const onClick = () => {
    if (values) {
      state.setContextValues([...values, ...state.contextValues] as TValues);
      location.pathname === "/"
        ? history.push("/additional")
        : history.push("/checkout");
    }
  };
  const onSubmit = () => {
    state.setContextValues([{}] as TValues);
    history.push("/");
  };

  return (
    <button onClick={!isSubmit ? onSubmit : onClick} style={style.Container}>
      {title}
    </button>
  );
}

export default OutlinedButton;
