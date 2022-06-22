import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";

const Home = () => {
  const { users } = useSelector((state) => state.usersReducer);
  return (
    <DefaultLayout>
      <h1>Home page</h1>
      <h1>Users length = {users.length}</h1>
    </DefaultLayout>
  );
};

export default Home;
