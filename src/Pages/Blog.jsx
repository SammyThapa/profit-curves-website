import style from "../css/BlogPage.module.css";
import { Link } from "react-router-dom";
import { blogs } from "../Data/blogData";
import { featuredBlog } from "../Data/blogData";

function Blog({ setFeatured }) {
  return (
    <section className={style.blogPage}>
      <div className={style.hero}>
        <h1>Our Blog</h1>

        <p>
          Stay updated with the latest programming tutorials, career guidance,
          interview preparation and industry insights.
        </p>
      </div>

      <div className={style.featuredCard}>
        {featuredBlog.image}

        <div className={style.featuredContent}>
          <span>Featured</span>

          <h2>{featuredBlog.heading}</h2>

          <p>{featuredBlog.para}</p>

          <Link to={`/blog/${featuredBlog.slug}`}>
            <button onClick={() => setFeatured(true)}>
              Read Full Article →
            </button>
          </Link>
        </div>
      </div>

      <h2 className={style.latestHeading}>Latest Articles</h2>

      <div className={style.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={style.card}>
            <img src={blog.image} alt="Image" />

            <span>{blog.category}</span>

            <h3>{blog.title}</h3>

            <p>{blog.description}</p>

            <small>{blog.date}</small>

            <Link to={`/blog/${blog.slug}`}>
              <button onClick={() => setFeatured(false)}>
                Read Full Article →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
