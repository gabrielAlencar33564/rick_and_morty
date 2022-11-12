import styled from "styled-components";

interface Props {
  status: string;
}

export const PersonCard = styled.li<Props>`
  width: 15.7rem;
  height: 20rem;
  padding: 1rem 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 0.3rem solid
    ${(props) =>
      props.status === "Alive"
        ? "rgba(139, 207, 33, 0.5)"
        : "rgba(255, 0, 0, 0.5)"};
  border-radius: 1rem;

  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    ${(props) =>
        props.status === "Alive"
          ? "rgba(139, 207, 33, 0.5)"
          : "rgba(255, 0, 0, 0.5)"}
      100%
  );

  cursor: pointer;

  h2 {
    width: 100%;
    text-align: center;

    font-size: 30px;
    font-family: var(--font-title-card);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) =>
      props.status === "Alive"
        ? "rgba(139, 207, 33, 1)"
        : "rgba(255, 0, 0, 1)"};
  }

  div {
    width: 14rem;
    height: 13.5rem;
    border: 0.3rem solid
      ${(props) =>
        props.status === "Alive"
          ? "rgba(139, 207, 33, 0.7)"
          : "rgba(255, 0, 0, 0.7)"};
    overflow: hidden;
    border-radius: 6px;

    img {
      width: 100%;
      height: 100%;
      -webkit-transition: -webkit-transform 0.5s ease;
      transition: transform 0.5s ease;
    }
  }

  &:hover {
    border-color: ${(props) =>
      props.status === "Alive"
        ? "rgba(139, 207, 33, 1)"
        : "rgba(255, 0, 0, 1)"};
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      ${(props) =>
        props.status === "Alive"
          ? "rgba(139, 207, 33, 0.6)"
          : "rgba(255, 0, 0, 0.6)"}100%
    );

    div {
      border-color: ${(props) =>
      props.status === "Alive"
        ? "rgba(139, 207, 33, 1)"
        : "rgba(255, 0, 0, 1)"};

      img {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }

  span {
    font-size: 1.5rem;
    font-family: var(--font-info-card);
    color: ${(props) =>
      props.status === "Alive"
        ? "rgba(139, 207, 33, 1)"
        : "rgba(255, 0, 0, 1)"};
  }
`;
