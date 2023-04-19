import "./App.css";
import Home from "./components/HomePage/Home";
import { Provider } from "react-redux";
import Store from "./components/Store/Store";

function App() {
  // Wrapping the whole application with Redux provider
  // The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. The store is a centralized place where the entire state of our React application is stored.
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
}

export default App;
