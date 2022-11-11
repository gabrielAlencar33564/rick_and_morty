import { createContext, useContext, useEffect, useState } from "react";
import { DataProps, IContext, IProvider, IResults } from "./interfaces";
import api from "../service";

const RickAndMortyContext = createContext<IContext>({} as IContext);

export const useRickAndMortyContext = (): IContext => {
  const context = useContext(RickAndMortyContext);
  return context;
};

export const RickAndMortyProvider = ({ children }: IProvider) => {
  const [personList, setPersonList] = useState<IResults[]>([]);

  const getCharacter = async () => {
    try {
      const { data }: DataProps = await api.get("/character");
      setPersonList(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <RickAndMortyContext.Provider value={{
        personList
    }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};
