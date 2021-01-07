import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { storeContext } from "./../../store/store";
import User from "../user/user";
import InfiniteScroll from "react-infinite-scroll-component";

const UserList = () => {
  const store = useContext(storeContext);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(15);
  const fetchMoreData = () => {
    if (currentIndex >= store.users.length) {
      setHasMoreUsers(false);
      return;
    }
    setCurrentIndex(currentIndex + 5);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={currentIndex}
        next={fetchMoreData}
        hasMore={hasMoreUsers}
      >
        {store.users.slice(0, currentIndex).map((user) => (
          <User userName={user.login} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default observer(UserList);
