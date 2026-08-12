import style from "../css/WhyChooseUs.module.css";
import { GiTeacher } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiLiveLine } from "react-icons/ri";

function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      icon: <GiTeacher className={style.icon} />,
      title: "Expert Trading Mentors",
      para: "Learn from experienced traders who provide practical market knowledge, live trading insights, and personalized guidance to help you trade confidently.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className={style.icon} />,
      title: "Live Market Training",
      para: "Practice in live market sessions with real-time analysis, chart reading, and trade execution to build practical trading skills.",
    },
    {
      id: 3,
      icon: <MdOutlineVerified className={style.icon} />,
      title: "Certificate of Completion",
      para: "Receive a certificate after successfully completing the course and assessments, recognizing your trading education.",
    },
    {
      id: 4,
      icon: <FaUserGraduate className={style.icon} />,
      title: "Trading Psychology",
      para: "Master emotional discipline, decision-making, and mindset techniques for consistent trading success.",
    },
    {
      id: 5,
      icon: <BiSupport className={style.icon} />,
      title: "Lifetime Support",
      para: "Get lifetime access to course updates, mentor guidance, doubt-solving sessions, and continuous learning support.",
    },
    {
      id: 6,
      icon: <RiLiveLine className={style.icon} />,
      title: "Live & Recorded Classes",
      para: "Attend live market sessions and access HD recorded lectures anytime to learn at your own pace.",
    },
  ];
  return (
    <div className={style.WhyChooseContainer}>
      <h3>Why Choose Us</h3>
      <h2>Master the Markets with Confidence</h2>
      <div className={style.cardList}>
        {cards.map((card) => {
          return (
            <div key={card.id} className={style.card}>
              {card.icon}
              <h3>{card.title}</h3>
              <p>{card.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
