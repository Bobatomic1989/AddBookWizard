import React, { useReducer } from "react";
import { Container } from "react-bootstrap";
import AddBookWizzard from "./components/AddBookWizzard/AddBookWizzard";
import "./App.css";

import AddBookStore, {
  initialState as addBookInitialState,
} from "./store/AddBookStore";

export const GlobalStoreContext = React.createContext();
function App() {
  return (
    <div className='App'>
      <GlobalStoreContext.Provider
        value={useReducer(AddBookStore, addBookInitialState)}
      >
        <Container>
          <AddBookWizzard></AddBookWizzard>
        </Container>
      </GlobalStoreContext.Provider>
    </div>
  );
}

export default App;
