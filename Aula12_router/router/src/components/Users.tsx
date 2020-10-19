import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { id: userId } = useParams<{ id: string }>();

  return <h1>Hello user identification: {userId} </h1>;
}

export default Users;
