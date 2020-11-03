import OurImgs from '../source/components/OurImgs/main';
import Head from "../source/components/Head/Head";

//<Head /> If you are in a project, this component should be in LayOut Component to load...
//... all our scripts and <links>
const service = () => {
  return(
   <div>
      <Head />
      <OurImgs />
    </div>
  )
}


export default service;