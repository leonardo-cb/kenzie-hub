import Global from "./styles/global";
import "./styles/fonts.css"
import { MainRoutes as Routes} from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
