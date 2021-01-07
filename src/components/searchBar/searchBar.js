import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { TextField, Button } from "@material-ui/core";
import { storeContext } from "./../../store/store";
import "./searchBar.css";

const SearchBar = () => {
  const store = useContext(storeContext);
  const handleTextFieldChange = (e) => {
    store.setSearchText(e.target.value);
  };
  return (
    <div className="searchBar">
      <TextField
        id="search-query"
        label="Enter user query"
        value={store.searchText}
        onChange={handleTextFieldChange}
      />
      <Button onClick={store.getDataFromGithubApi} id="searchButton">
        Search
      </Button>
    </div>
  );
};

export default observer(SearchBar);
