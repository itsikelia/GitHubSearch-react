import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";
import { storeContext } from "./store/store";
import UserList from "./components/userList/userList";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  const store = useContext(storeContext);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to usertron</h3>
        <img id="git-icon" src={logo} />
        <SearchBar />
        {store.totalUserFound && <h3>total users: {store.totalUserFound}</h3>}
        <UserList />
      </header>
    </div>
  );
}

export default observer(App);
