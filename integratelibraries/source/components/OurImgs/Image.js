import classes from "./Images.module.css";
import Image from "next/image";

const image = (props) => {
  return(
    <div className="col-md-3">
      <a className={classes.Img} href={props.imgRoute} data-toggle="lightbox" data-gallery="img-gallery" >
        <Image
          className={`${classes.imgThumbnail} img-fluid img-thumbnail`}
          src={props.imgRoute}
          width={500}
          height={500}
          alt="Fixing, Setting, Framing"
        />
      </a>
      <figcaption className={`${classes.figureCaption} py-2 mb-3 bg-secondary text-center text-white`}>Burgaz, Island, Istanbul</figcaption>
  </div>
  )
}

export default image;