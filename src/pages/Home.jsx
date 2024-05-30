import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("HomePage");

  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <Link to="/login">登录</Link>
      <p></p>
    </div>
  );
};

export default HomePage;
