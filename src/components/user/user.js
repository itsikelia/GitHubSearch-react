import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { storeContext } from "./../../store/store";
import axios from "axios";
import "./user.css";
import { axiosConfig } from "./../../utils/axiosHelper";

const User = (props) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get("http://api.github.com/users/" + props.userName, {
        axiosConfig,
      })
      .then((res) => setUserData(res.data))
      .catch(() => {
        setUserData({});
      });
  }, []);

  return (
    <>
      {Object.keys(userData).length > 0 ? (
        <div className="user">
          {userData.avatar_url && <img src={userData.avatar_url} />}
          <span>{userData.name || userData.login}</span>
          <div className="blog">{userData.blog}</div>
          <div className="bio">{userData.bio}</div>
        </div>
      ) : null}
    </>
  );
};

export default User;
