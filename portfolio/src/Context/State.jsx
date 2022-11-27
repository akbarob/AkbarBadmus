import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export const StateProvider = ({ children }) => {
  const [active, setActive] = useState("");
  return (
    <Context.Provider value={{ active, setActive }}>
      {children}
    </Context.Provider>
  );
};
export const useStateProvider = () => useContext(Context);
