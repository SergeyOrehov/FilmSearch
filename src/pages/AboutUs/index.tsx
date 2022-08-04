import React from "react";

// routes
import routeMain from "./routes";

//image
import ImageAboutUs from "image/AboutUs.jpg";

//components
import PageTitle from "components/PageTitle";

// styles
import "./styles.scss";

const AboutUs = () => {
   return (
      <section className='AboutUsPage'>
         <div className='container'>
            <div className='aboutUsWrapper'>
               <img src={ImageAboutUs} alt={ImageAboutUs} />
               <div className='info'>
                  <PageTitle title={<h2>MOVIEinfo</h2>} />
                  <p>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                     eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                     montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                     eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                     fringilla vel, aliquet nec,vulputate eget, arcu. In enim justo, rhoncus ut,
                     imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.
                     Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                     eleifend tellus. Aenean leo ligula, porttitor eu,consequat vitae, eleifend ac,
                     enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                     Phasellus viverra nulla ut metus varius laoreet.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export { routeMain };
export default AboutUs;
