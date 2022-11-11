import { createContext, useContext } from "react";
import { IContext, IProvider } from "./interfaces";

const RickAndMortyContext = createContext({} as IContext);

export const useRickAndMortyContext = () => {
    const context = useContext(RickAndMortyContext);
    return context;
}

export const RickAndMortyProvider = ({children}: IProvider) => {
    return (
        <RickAndMortyContext.Provider value={{}}>
            {children}
        </RickAndMortyContext.Provider>
    )
}