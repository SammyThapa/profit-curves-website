import style from "../css/Body.module.css";
// import image from "../assets/course.jpg";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className={style.mainContainer}>
      <div className={style.overlay}></div>
      <div className={style.flexingCon}>
        <div className={style.contentContainer}>
          <h3>HELLO TRADERS</h3>
          <h2>WELCOME TO PROFIT CURVE</h2>
          <h3 className="font-bold">curve the market , create the profit</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eum blcanditiis veritatis et sunt dicta.
          </p>
          <Link to={"/courses/All"}>
            <button>Apply Now</button>
          </Link>
        </div>
        <div className={style.imageCon}>

        </div>
      </div>
    </div>
  );
}

export default Body;
