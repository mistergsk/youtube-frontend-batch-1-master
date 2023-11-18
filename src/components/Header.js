import {useState} from "react";
import logo from "./youtubelogo.jpg";

const HeaderComponent = () => {
  function onSignClick(){
    window.location.href ="/login";
  }
  function onLogout() {
    localStorage.setItem("loggedIn", false);
    setIsLoggedIn("false");
  }

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn")
  );

  return (
    <div className="header">
      <div className="logo">
        <img className="logoimage" src={logo} />
      </div>
      <div className="search">
        <input type="text" className="searchInput" />
        <button className="searchButton">Search</button>
      </div>
      <div className="signin">
        {isLoggedIn == "true" ?(
        <button className="signInButton" onClick={onLogout}>Logout</button>
        ):(
           <button className="signInButton" onClick={onSignClick}>SignIn</button>)}
      </div>
    </div>
  );
};

export default HeaderComponent;
