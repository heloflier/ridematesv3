import { useContext } from "react"
import { StoreContext } from "./store-context"
import type { TRootStore } from './root-store'

const useStores = (): TRootStore => {
    return useContext(StoreContext);
}

export {useStores};