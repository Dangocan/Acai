import React from "react";
import { TContext } from "../../context/GlobalContext";

type ListOrderProps = {
  options: TContext;
};

type TOptionItem = { name: string; values: string[] };

function ListOrder({ options }: ListOrderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      {options.map((option: TOptionItem) => (
        <>
          <p style={{ color: "purple", fontWeight: "bold", marginTop: "10px" }}>
            {option.name}:
          </p>
          {option.values.map((value) => (
            <p style={{ color: "purple", margin: "5px 0 5px 10px" }}>
              - {value}
            </p>
          ))}
        </>
      ))}
    </div>
  );
}

export default ListOrder;
