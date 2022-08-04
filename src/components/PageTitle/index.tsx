import React from "react";

//styles
import "./styles.scss";

interface IPageTitleParams {
   title: JSX.Element;
}

const PageTitle: React.FC<IPageTitleParams> = ({ title }) => {
   return <div className='pageTitle'>{title}</div>;
};

export default PageTitle;
