import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  margin-top: 1rem;
  img {
    width: 42rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0 4.4rem 0 4.4rem;
    margin-bottom: 10px;

    button {
      padding: 8px;
      border-radius: 5px;
      border: 3px solid rgba(139, 207, 33, 0.5);
      color: var(--color-g1);
      background-color: transparent;

      cursor: pointer;

      &:hover {
        border-color: var(--color-g1);
      }
    }
  }
`;
