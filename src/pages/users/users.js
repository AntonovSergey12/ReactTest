import React, { useEffect, useState } from "react";

import "./users.css"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://64969fe283d4c69925a2f679.mockapi.io/tsks",
          {
            headers: { "content-type": "application/json" },
          }
        );
        const data = await response.json();
        const filteredUsers = data.filter((user) => user.name && user.id);
        setUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="info">
      <h2>Список пользователей</h2>
      <ul className="info__list">
        {users.map((user) => (
          <li key={user.id}>
				ID: {user.id},
				Name: {user.name}
				</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
