import { HeaderContainer } from "./style";
import { useRickAndMortyContext } from "../../context/index";

export const Header = () => {
  const { 
    setCount, 
    count, 
    onNext, 
    onPrev 
  } = useRickAndMortyContext();

  return (
    <HeaderContainer>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        alt="logo rick and morty"
      />
      <nav>
        <button disabled={onNext} onClick={() => setCount(count + 1)}>
          next
        </button>
        <button disabled={onPrev} onClick={() => setCount(count - 1)}>
          prev
        </button>
      </nav>
    </HeaderContainer>
  );
};
