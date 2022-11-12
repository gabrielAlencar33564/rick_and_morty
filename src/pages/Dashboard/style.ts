import styled from "styled-components";

export const ScrollbarRemoved = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(139, 207, 33, 0.2);
    border-radius: 6px;
    border: 2px solid transparent;
  }

  scrollbar-width: thin;
    scrollbar-color: rgba(var(--color-grey-2), 1) rgba(var(--color-grey-1), 1);
`;
