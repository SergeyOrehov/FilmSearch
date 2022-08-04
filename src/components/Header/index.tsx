import React from "react";

// nav
import { NavLink } from "react-router-dom";

// pages
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeAboutUs } from "pages/AboutUs";
import { routeMain as routeSearch } from "pages/Search";
import { routeMain as routeMovieCategories } from "pages/MovieCategories";

//components
import LogoElem from "components/Logo";

// styles
import "./styles.scss";

const Header = () => {
   return (
      <header className='mainHeader'>
         <div className='container'>
            <nav className='headerNav'>
               <LogoElem />
               <div>
                  <ul className='menu'>
                     <li>
                        <NavLink to={routeMainPage}>Главная</NavLink>
                     </li>
                     <li>
                        <NavLink to={routeMovieCategories}>Фильмы по категории</NavLink>
                     </li>
                     <li>
                        <NavLink to={routeAboutUs}>О нас</NavLink>
                     </li>
                     <li>
                        <NavLink to={routeSearch}>Поиск</NavLink>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
