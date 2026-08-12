import style from "../css/ContactUs.module.css";
import { IoLocation } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";

function Contact() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const textMessage = formData.get("message");

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

    if (textMessage.trim() === "") {
      alert("Please enter some message.");
      return;
    }

    const message = `


 Details

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${textMessage}
`;

    const whatsappNum = "917017569269";

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <main className={style.mainCon}>
      <section className={style.header}>
        <span>GET IN TOUCH</span>

        <h1>Contact Us</h1>

        <p>
          Have a question or need help? Send us a message and our team will get
          back to you.
        </p>
      </section>

      <section className={style.contactSection}>
        {/* LEFT SIDE */}

        <div className={style.contactInfo}>
          <h2>Let's Talk</h2>

          <p>
            Whether you have a question about our courses, need guidance, or
            simply want to learn more about Profit Curve, we're here to help.
          </p>

          <div className={style.infoItem}>
            <div className={style.icon}>
              <IoLocation />
            </div>

            <div>
              <h3>Our Location</h3>
              <p>Dehradun, India</p>
            </div>
          </div>

          <div className={style.infoItem}>
            <div className={style.icon}>
              <SiGmail />
            </div>

            <div>
              <h3>Email</h3>
              <p>support@profitcurve.com</p>
            </div>
          </div>

          <div className={style.infoItem}>
            <div className={style.icon}>
              <FaPhone />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 74559 32449</p>
            </div>
          </div>

          <div className={style.infoItem}>
            <div className={style.icon}>
              <MdTimer />
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* FORM */}

        <div className={style.formContainer}>
          <h2>Send Us a Message</h2>

          <p>Fill out the form and we'll get back to you.</p>

          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.field}>
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
              />
            </div>

            <div className={style.field}>
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={style.field}>
              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className={style.field}>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                rows="5"
              />
            </div>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
