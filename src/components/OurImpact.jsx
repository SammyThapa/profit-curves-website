import style from "../css/OurImpact.module.css";

function OurImpact() {
  const impactCards = [
    {
      id: 1,
      number: "35+",
      title: "Students",
    },
    { id: 2, number: "5+", title: "Courses" },
    { id: 3, number: "1", title: "Expert" },
    { id: 4, number: "95%", title: "Satisfaction Rate" },
  ];
  return (
    <div className={style.mainCon}>
      <h2>Our Impact</h2>
      <div className={style.flexingCon}>
        {impactCards.map((card) => {
          return (
            <div className={style.card} key={card.id}>
              <h3>{card.number}</h3>
              <p>{card.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurImpact;
