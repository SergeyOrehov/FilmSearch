import React from "react";

//styles
import "./styles.scss";

interface IPageTitleParams {
   title: JSX.Element;
}

const PageTitleMain: React.FC<IPageTitleParams> = ({ title }) => {
   return (
      <div className='pageTitleMain'>
         {title}
         <p>Самый популярный портал о фильмах</p>
      </div>
   );
};

export default PageTitleMain;
