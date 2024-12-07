// src/stores/store-context.ts
import { createContext } from "react";
import RootStore from "./root-store";
import { useContext } from "react";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;

export const useStores = () => {
    return useContext(StoreContext);
};
