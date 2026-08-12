import style from "../css/FeedBack.module.css";
import { FaUserCircle } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
function FeedBack() {
  const FeedbackCards = [
    {
      id: 1,
      rating: 5,
      feedback:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima magni doloremque nisi accusantium placeat repreh",
      icon: <FaUserCircle className={style.icon} />,
      username: "John",
    },
    {
      id: 2,
      rating: 4.5,
      feedback:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima magni doloremque nisi accusantium placeat repreh",
      icon: <FaUserCircle className={style.icon} />,
      username: "Sammy",
    },
    {
      id: 3,
      rating: 4,
      feedback:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima magni doloremque nisi accusantium placeat repreh",
      icon: <FaUserCircle className={style.icon} />,
      username: "Leon",
    },
  ];

  return (
    <div className={style.mainCon}>
      <h2>Students Feedbacks</h2>
      <div className={style.cardList}>
        {FeedbackCards.map((card) => {
          return (
            <div key={card.id} className={style.card}>
              <p className="flex items-center gap-2">
                <IoIosStar className="text-yellow-400" />
                {card.rating}
              </p>
              <p>{card.feedback}</p>
              <div className={style.iconflex}>
                <span>{card.icon}</span>
                <h3>{card.username}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeedBack;
