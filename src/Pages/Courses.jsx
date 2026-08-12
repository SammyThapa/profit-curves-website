import style from "../css/CoursePage.module.css";
import { IoIosStar } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { courses } from "../Data/coursesData";
function Courses() {
  const { mode } = useParams();

  const filteredCourse =
    mode === "All"
      ? courses
      : courses.filter((course) => {
          return course.mode === mode;
        });

  return (
    <div>
      <h2 className={style.sectionHeading}>Our Courses</h2>
      <p className={style.sectionPara}>
        Take one step ahead and Learn essential career skills
      </p>
      <div className={style.mainContainer}>
        {filteredCourse.map((course) => (
          <div key={course.id} className={style.courseCard}>
            <img src={course.image} alt={course.title} />

            <div className={style.cardContent}>
              <div className={style.topRow}>
                <div className={style.ratingFlex}>
                  <IoIosStar className={style.iconStar} />
                  <span>{course.rating}</span>
                </div>
              </div>

              <h2>{course.title}</h2>

              <p>{course.description}</p>
              <div className={style.ratingFlex}>
                <PiStudentFill className={style.iconStudent} />
                <p> {course.students} Students</p>
              </div>
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
    </div>
  );
}

export default Courses;
