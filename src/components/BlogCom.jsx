import style from "../css/BlogCom.module.css";

import { useNavigate } from "react-router-dom";

function BlogCom() {
  const navigate = useNavigate();
  const Blog_Page = () => {
    navigate("/blog");
  };
  return (
    <div className={style.mainCon}>
      <div className={style.contents}>
        <h2>Our Blogs</h2>
        <p>Learn the latest tips, career advice, and industry insights.</p>
      </div>
      <div className={style.cardList}>
        <div className={style.card1}>
          <img src="https://placehold.co/900x450" alt="React Roadmap" />

          <span className={style.category}>React</span>

          <h2>Complete React Roadmap for Beginners in 2026</h2>

          <div className={style.meta}>
            <span>📅 August 7, 2026</span>
          </div>

          <p>
            Learn the complete roadmap from HTML, CSS, JavaScript, React, APIs,
            Git, deployment, and portfolio building.
          </p>

          <p>
            This guide explains the skills, projects, and learning strategy
            required to become a job-ready frontend developer, including
            practical tips, interview preparation, and common mistakes beginners
            should avoid.
          </p>
        </div>
        <div className={style.verticalFlexing}>
          <div className={style.card2}>
            <img src="https://placehold.co/400x220" alt="React Blog" />

            <span className={style.category}>React</span>

            <h3>Top 10 React Interview Questions</h3>

            <p className={style.description}>
              Prepare for your next frontend interview with the most frequently
              asked React questions and practical answers.
            </p>

            <div className={style.meta}>
              <span>📅 Aug 7, 2026</span>
            </div>
          </div>
          <div className={style.card2}>
            <img src="https://placehold.co/400x220" alt="React Blog" />

            <span className={style.category}>React</span>

            <h3>Top 10 React Interview Questions</h3>

            <p className={style.description}>
              Prepare for your next frontend interview with the most frequently
              asked React questions and practical answers.
            </p>

            <div className={style.meta}>
              <span>📅 Aug 7, 2026</span>
            </div>
          </div>
        </div>
      </div>

      <button className={style.moreBlogs} onClick={Blog_Page}>
        Read More Blogs
      </button>
    </div>
  );
}

export default BlogCom;
