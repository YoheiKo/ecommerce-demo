import React, { useEffect, useState } from "react";
import Usercard from "../components/test/Usercard";

function test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users?.map(({ id, ...props }) => (
        <Usercard key={id} {...props} />
      ))}
    </div>
  );
}

export default test;
