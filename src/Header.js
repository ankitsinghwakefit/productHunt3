import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Header(){
    return(
        <div>
            <header className="header">

               <div className="headerFirstContainer">
                     <div className="logo">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>
                    </div>
                    <div>
                        <input className="searchBox" type="text" placeholder="Discover Your next favorite thing..." />
                    </div>
                    <nav className="links">
                        <a href="#">Deals</a>
                        <a href="#">Jobs</a>
                        <a href="#">Makers</a>
                        <a href="#">Radio</a>
                        <a href="#">Ship</a>
                        <a href="#">...</a>
                    </nav>
               </div>
                <nav>
                    <button className="loginBtn">LOG IN</button>
                    <button className="signupBtn">SIGN UP</button>
                </nav>
            </header>
        </div>
    )
}

export default Header;