import style from "../css/Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerGrid}>
        <div className={style.column}>
          <h2>Profit Curve</h2>

          <p>
            Helping students build successful careers through industry-focused
            online and offline courses.
          </p>

          <div className={style.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        <div className={style.column}>
          <h3 className="font-bold">Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/courses/All">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/aboutUs">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={style.column}>
          <h3 className="font-bold">Popular Courses</h3>

          <Link to="/CourseBooking/Profit Curves Foundation course Checkout">
            Profit Curves Foundation
          </Link>

          <Link to="/CourseBooking/Profit Curves Pro course Checkout">
            Profit Curves Pro
          </Link>

          <Link to="/CourseBooking/Profit Curves Elite course Checkout">
            Profit Curves Elite
          </Link>

          <Link to="/CourseBooking/Profit Curves One-on-One course Checkout">
            Profit Curves One-on-One
          </Link>
        </div>

        <div className={style.column}>
          <h3 className="font-bold">Contact</h3>

          <p className="flex justify-start items-center gap-2">
            {" "}
            <IoLocation /> Dehradun, India
          </p>
          <p className="flex justify-start items-center gap-2">
            {" "}
            <BiLogoGmail /> support@profitcurve.com
          </p>
          <p className="flex justify-start items-center gap-2">
            <FaPhoneAlt /> +91 9876543210
          </p>
        </div>
      </div>

      <div className={style.bottom}>
        <p>© 2026 Profit Curve. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
