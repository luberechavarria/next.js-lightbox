import { useEffect } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Images.module.css";
import ImageComp from "./Image";


const imagesRoute = [
  {route: '/images/one.jpg'}, 
  {route: '/images/two.jpg'}, 
  {route: '/images/three.jpg'},
  {route: '/images/four.jpg'},
]

const images = (props) => {
 
  //create listeners Jquery in images.
  //we do it here because it must be created when this file exist in Dom and jquery find the element
  useEffect(() => {
    require('./listenersJquery/scripts');
    console.log("here listeners")
  }, [])
  
  return (
    <Aux>
      <div className={`${classes.columTop} col-md-5 py-3 mb-4`}>
        <h1 className={`${classes.h1} text-white`}>our work talks by itself</h1>
        <p className="text-white">
          Burgazada or shortly Burgaz (Greek: Αντιγόνη, Antigoni) is the third
          largest of the Princes' Islands in the Sea of Marmara, near Istanbul,
          Turkey.
        </p>
      </div>
      
      <section className="bg-light pt-4">
        <div className="container">
          <div className="row">
            {imagesRoute.map(route => (
                <ImageComp key={route.route} imgRoute={route.route}/>
            ))}
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default images;
