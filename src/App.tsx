import { RickAndMortyProvider } from "./context";
import { RoutesPage } from "./routes";

function App() {
  return (
    <RickAndMortyProvider>
      <RoutesPage/>
    </RickAndMortyProvider>
  );
}

export default App;
