import { IResults } from "../../context/interfaces";
import { PersonCard } from "./style";

export const Card = ({ image, name, origin, species, status }: IResults) => {
  return (
    <PersonCard>
      <h2>{name}</h2>
      <div>
        <img src={image} alt={name} />
      </div>

      <span>
        {origin.name} - {species}
      </span>
    </PersonCard>
  );
};
