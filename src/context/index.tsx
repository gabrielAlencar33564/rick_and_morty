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
  const [count, setCount] = useState<number>(1);
  const [onNext, setOnNext] = useState<boolean>(false);
  const [onPrev, setOnPrev] = useState<boolean>(true);

  const getCharacter = async () => {
    try {
      const { data }: DataProps = await api.get(`/character/?page=${count}`);
      setPersonList(data.results);
      setOnNext(!data.info.next);
      setOnPrev(!data.info.prev);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [count]);

  return (
    <RickAndMortyContext.Provider value={{
        personList,
        onNext,
        onPrev,
        setCount,
        count
    }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};