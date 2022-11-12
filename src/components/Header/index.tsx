import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo rick and morty" />
      <nav>
        <a href="">next</a>
        <a href="">prev</a>
      </nav>
    </HeaderContainer>
  );
};
