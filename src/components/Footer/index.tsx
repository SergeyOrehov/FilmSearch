import React from "react";

// image
import LogoElem from "components/Logo";

//styles
import "./styles.scss";

const Footer = () => {
   return (
      <footer className='mainFooter'>
         <div className='container'>
            <LogoElem />
            <p className='centerText'>Дипломный проект</p>
            <div className='develop'>
               <p>
                  <span>Made by</span>
               </p>
               <p>Сергей Орехов</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
