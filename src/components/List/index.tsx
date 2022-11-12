import { useRickAndMortyContext } from "../../context";
import { Card } from "../Card/index";
import { ListPersons } from "./style";

export const List = () => {
  const { personList } = useRickAndMortyContext();
  return (
    <ListPersons>
      {personList.map(({ id, image, name, status, species, origin }) => {
        return <Card 
        key={id}
        image={image}
        name={name}
        status={status}
        species={species}
        origin={origin}
        />;
      })}
    </ListPersons>
  );
};
