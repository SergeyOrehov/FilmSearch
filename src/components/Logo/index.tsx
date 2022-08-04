import React from "react";

// nav
import { NavLink } from "react-router-dom";

// pages
import { routeMain as routeMainPage } from "pages/MainPage";

//Image
import Logo from "image/Logo.png";

// styles
import "./styles.scss";

const LogoElem = () => {
   return (
      <div className='logo'>
         <NavLink to={routeMainPage}>
            <img src={Logo} alt={Logo} />
         </NavLink>
      </div>
   );
};

export default LogoElem;
