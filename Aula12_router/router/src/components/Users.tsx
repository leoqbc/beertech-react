import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams<{ id: string }>();
  return <h1>Hello user identification: {id}</h1>;
}

export default Users;
