import React from "react";
import './App.css';
import Profile from "./Profile/profile";
const App = () => {
  const person ={
    fullname:"maher zain",
    bio:"born in 15324",
    profession:"Chanteur"
  };
  return(
    <div  style={{
      boxShadow: "5px 10px #888888",
      margin: "50px ",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    }} 
    >
      <Profile person={person}>
        <img 
        src={"https://upload.wikimedia.org/wikipedia/commons/2/24/MAHER_ZAIN_%287401574750%29.jpg"
         } 
         alt="childphoto"/>
      </Profile>
    </div>
  );
};

export default App;
