import { useParams } from "react-router-dom";
import { courses } from "../Data/coursesData";
import style from "../css/CourseBooking.module.css";
import { IoIosStar } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";

function CourseBooking() {
  const { slug } = useParams();

  const checkingCourse = courses.find((course) => course.slug === slug);

  if (!checkingCourse) {
    return (
      <h1 className="flex justify-center items-center">Course not found</h1>
    );
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const city = formData.get("city");

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (!emailPattern.test(email.trim())) {
      alert("Please enter a valid email.");
      return;
    }

    if (!phonePattern.test(phone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (city.trim() === "") {
      alert("Please enter your city.");
      return;
    }

    const message = `
New Course Booking

Course: ${checkingCourse.title}
Mode: ${checkingCourse.mode}
Price: ${checkingCourse.price}

Student Details

Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
`;

    const whatsappNum = "917017569269";

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={style.pageContainer}>
      <div className={style.bookingContainer}>
        <div className={style.courseInfo}>
          <img src={checkingCourse.image} alt={checkingCourse.title} />

          <span className={style.mode}>{checkingCourse.mode}</span>

          <h1>{checkingCourse.title}</h1>

          <p>{checkingCourse.description}</p>

          <div className={style.courseDetails}>
            <span className="flex justify-center items-center gap-2">
              {" "}
              <IoIosStar className="text-yellow-400" /> {checkingCourse.rating}
            </span>

            <span className="flex justify-center items-center gap-2">
              <FaUserGraduate className="text-blue-700" />{" "}
              {checkingCourse.students}
            </span>
          </div>

          <h2>{checkingCourse.price}</h2>
        </div>

        <div className={style.formContainer}>
          <h2>Book This Course</h2>

          <p>Enter your details and our team will contact you on WhatsApp.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

            <label>City</label>

            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              required
            />

            <button type="submit">Continue on WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourseBooking;
