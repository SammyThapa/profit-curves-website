import { Link } from "react-router-dom";
import style from "../css/Courses.module.css";
import { IoIosStar } from "react-icons/io";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Profit Curves Foundation",
      image: img3,
      description:
        "Master price action, candlestick patterns, market structure, risk management, psychology, and practical trading setups—with lifetime access to classes, notes, and future updates.",

      rating: 4.9,
      students: "1,200+",
      price: "₹5000",
      mode: "online",
      slug: "Profit Curves Foundation course Checkout",
    },
    {
      id: 2,
      title: "Profit Curves Pro",
      image: img2,
      description:
        "Get weekly live doubt sessions, strategy refinement, trade reviews, practice charts, community access, monthly Q&As, and personal guidance.",

      rating: 4.9,
      students: "1,200+",
      price: "₹10,000",
      mode: "online",
      slug: "Profit Curves Pro course Checkout",
    },
    {
      id: 3,
      title: "Profit Curves Elite",
      image: img1,
      description:
        "Get live market sessions, advanced analysis, funded account guidance, challenge strategies, premium resources, and priority support.",

      rating: 4.9,
      students: "1,200+",
      price: "₹20,000",
      mode: "online",
      slug: "Profit Curves Elite course Checkout",
    },
  ];

  return (
    <div>
      <h2 className={style.sectionHeading}>Our Courses</h2>
      <div className={style.mainContainer}>
        {courses.map((course) => (
          <div key={course.id} className={style.courseCard}>
            <img src={course.image} alt={course.title} />

            <div className={style.cardContent}>
              <div className={style.topRow}>
                <span className="flex gap-2 items-center">
                  <IoIosStar className="text-yellow-400" /> {course.rating}
                </span>
              </div>

              <h2>{course.title}</h2>

              <p className="mt-2">{course.description}</p>

              <p className="mt-2"> {course.students} Students</p>
              <p className="mt-2">{course.mode}</p>

              <div className={style.bottomRow}>
                <h3>{course.price}</h3>
                <Link to={`/CourseBooking/${course.slug}`}>
                  <button>Enroll Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/courses/All" className={style.viewAllCourses}>
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default CoursesSection;
