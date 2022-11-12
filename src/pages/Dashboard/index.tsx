import { List } from "../../components/List/index";
import { Header } from "../../components/Header/index";
import { ScrollbarRemoved } from "./style";

export const Dashboard = () => {
  return (
    <ScrollbarRemoved>
      <Header />
      <main>
        <List />
      </main>
    </ScrollbarRemoved >
  );
};
