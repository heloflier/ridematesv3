import { useContext } from "react"
import { StoreContext } from "./store-context"

const useStores = () => {
    return useContext(StoreContext);
}

export {useStores};