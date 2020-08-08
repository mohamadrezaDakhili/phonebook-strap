import React, { useState } from "react";
import "./App.css";
import Main from "./view/Main";
import NavVertical from "./view/Nav/NavVertical/NavVertical";
import Context from "./Context";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <Context.Provider
    //   value={{
    //     isOpen,
    //     toggle,
    //     push: (path) => props.history.push(path),
    //     search,
    //     setSearch,
    //     setPending,
    //     pending,
    //   }}
    // >
    <Provider store={store}>
      <div className="boxMain p-0 m-0">
        <Main />
        <NavVertical />
      </div>
    </Provider>
    // </Context.Provider>
  );
}

export default App;
