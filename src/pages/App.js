import { Provider } from "react-redux";
import { MainRoutes, Store } from "../config";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
