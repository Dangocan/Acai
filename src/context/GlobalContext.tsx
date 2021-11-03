import React, { createContext } from "react";

export type TContext = Array<{ name: string; values: string[] }>;

export const Global = createContext<TContext>([{}] as TContext);

function GlobalContext({ children }: any) {
  return <Global.Provider value={[{}] as TContext}>{children}</Global.Provider>;
}

export default GlobalContext;
