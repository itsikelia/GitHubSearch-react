import { createContext } from "react";
import {
  observable,
  action,
  runInAction,
  configure,
  makeObservable,
} from "mobx";
import axios from "axios";
import { axiosConfig } from "./../utils/axiosHelper";

configure({ enforceActions: "observed" });
class Store {
  searchText = "";
  users = [];
  totalUserFound = null;
  constructor() {
    makeObservable(this, {
      searchText: observable,
      users: observable,
      totalUserFound: observable,
      setSearchText: action,
      setUsers: action,
      setTotalUserFound: action,
      getDataFromGithubApi: action,
    });
  }
  setSearchText = (newText) => {
    this.searchText = newText;
  };

  setUsers = (newUsers) => {
    this.users = [...newUsers];
  };

  setTotalUserFound = (newNumber) => {
    this.totalUserFound = newNumber;
  };

  getDataFromGithubApi = () => {
    this.setUsers([]);
    axios
      .get(
        "https://api.github.com/search/users?q=" + this.searchText,
        axiosConfig
      )
      .then((response) => {
        this.setTotalUserFound(response.data.total_count);
        this.setUsers(response.data.items);
      });
  };
}

export const store = new Store();
export const storeContext = createContext(store);
