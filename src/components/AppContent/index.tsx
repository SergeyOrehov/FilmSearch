import React from "react";

// Route
import { Route, Switch, Redirect } from "react-router-dom";

// components
import Header from "components/Header";
import Footer from "components/Footer";

// pages
import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import AboutUs, { routeMain as routeAboutUs } from "pages/AboutUs";
import Search, { routeMain as routeSearch } from "pages/Search";
import MovieCategories, { routeMain as routeMovieCategories } from "pages/MovieCategories";
import MovieDetails, { routeMain as routeMovieDetails } from "pages/MovieDetails";

// styles
import "./styles.scss";

const AppContent = () => {
   return (
      <div className='AppContentWraper'>
         <Header />
         <main>
            <Switch>
               <Route exact path={routeMainPage()} component={MainPage} />
               <Route exact path={routeAboutUs()} component={AboutUs} />
               <Route exact path={routeSearch()} component={Search} />
               <Route exact path={routeMovieCategories()} component={MovieCategories} />
               <Route exact path={routeMovieDetails()} component={MovieDetails} />
               <Redirect
                  to={{
                     pathname: routeMainPage(),
                  }}
               />
            </Switch>
         </main>
         <Footer />
      </div>
   );
};

export default AppContent;
