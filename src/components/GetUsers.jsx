import { usersMockData } from "../_mock/users/";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    setTimeout(() => {
      setUsers(usersMockData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress
          color="primary" // Daire rengini belirler
          size={80} // Dairesel boyutu belirler
          thickness={5} // Daire kalınlığını belirler
        />
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetUsers;
