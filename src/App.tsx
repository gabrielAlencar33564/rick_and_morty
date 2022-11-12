import { RickAndMortyProvider } from "./context";
import { RoutesPage } from "./routes";
import "./style/reset.css";
import "./style/global.css";

function App() {
  return (
    <RickAndMortyProvider>
      <RoutesPage/>
    </RickAndMortyProvider>
  );
}

export default App;
