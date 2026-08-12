import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "../css/Header.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../assets/profitCurve.png";
import { useRef, useEffect } from "react";

function Header({ setSelectedMode, selectedMode }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const courseMenuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        courseMenuRef.current &&
        !courseMenuRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const OnlineCourse = () => {
    setSelectedMode("online");
    setShowDropdown(false);
    navigate("/courses/online");
  };
  const OfflineCourse = () => {
    setSelectedMode("offline");
    setShowDropdown(false);
    navigate("/courses/offline");
  };
  const AllCourse = () => {
    setSelectedMode("All");
    setShowDropdown(false);
    navigate("/courses/All");
  };
  let courseHeading = "Courses";

  if (selectedMode === "online") {
    courseHeading = "Online Courses";
  }

  if (selectedMode === "offline") {
    courseHeading = "Offline Courses";
  }

  return (
    <div className={style.headerContainer}>
      <div className="flex justify-center items-center gap-1">
        <img src={logo} alt="LOGO Image" className="w-20 h-auto" />
        <h1 className="text-3xl">Profit Curves</h1>
      </div>

      <ul className={style.liItems}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={style.courseItem} ref={courseMenuRef}>
          <button className={style.courseBtn} onClick={toggleDropDown}>
            {courseHeading}
            {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {showDropdown && (
            <ul className={style.dropdown}>
              <li>
                <button onClick={AllCourse}>All Courses</button>
              </li>
              <li>
                <button onClick={OnlineCourse}>Online Courses</button>
              </li>

              <li>
                <button onClick={OfflineCourse}>Offline Courses</button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link to="./contact" className={style.ContactButton}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
