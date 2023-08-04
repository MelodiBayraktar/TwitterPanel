import React from "react";
import { useParams } from "react-router-dom";
import { usersMockData } from "../_mock/users";
function UserDetail() {
  const { id } = useParams();
  const  user  = usersMockData.find((user) => user.id === id);

  if (!user) {
    return <p>User not found</p>;
  }
  return <div>UserDetail {user.id}
  {user.name}</div>;
}

export default UserDetail;
