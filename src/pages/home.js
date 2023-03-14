import React from "react";
import profilePic from "../profilePic.JPG";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Anna Benari</p>
      <img src={profilePic}></img>
      <p>Work smarter not harder</p>
      <p>This is my portfolio site</p>
    </div>
  );
}

export default Home;
