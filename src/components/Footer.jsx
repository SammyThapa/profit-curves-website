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

          <a href="/">Home</a>
          <a href="/courses/All">Courses</a>
          <a href="/blog">Blog</a>
          <a href="/aboutUs">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className={style.column}>
          <h3 className="font-bold">Popular Courses</h3>

          <a href="/CourseBooking/React course Checkout">React Development</a>
          <a href="/CourseBooking/JS course Checkout">JavaScript Mastery</a>
          <a href="/CourseBooking/Python course Checkout">Python Programming</a>
          <a href="/CourseBooking/UI and UX Design course Checkout">
            UI/UX Design
          </a>
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
