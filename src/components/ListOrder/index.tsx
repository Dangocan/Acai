import React, { useContext } from "react";
import { Global } from "../../context/GlobalContext";

type ListOrderProps = {
  options: Array<{ name: string; values: string }>;
};

type TOptionItem = { name: string; values: string };

function ListOrder({ options }: ListOrderProps) {
  const { contextValues } = useContext(Global);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      {contextValues.map(
        (option: TOptionItem, index) =>
          option.values &&
          option.name && (
            <React.Fragment key={index}>
              <p
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {option.name}:
              </p>
              <p style={{ color: "purple", margin: "5px 0 5px 10px" }}>
                - {option.values}
              </p>
            </React.Fragment>
          )
      )}
    </div>
  );
}

export default ListOrder;
