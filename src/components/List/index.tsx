import { useRickAndMortyContext } from "../../context";
import { Card } from "../Card/index";

export const List = () => {
  const { personList } = useRickAndMortyContext();
  return (
    <ul>
      {personList.map(() => {
        return <Card />;
      })}
    </ul>
  );
};
