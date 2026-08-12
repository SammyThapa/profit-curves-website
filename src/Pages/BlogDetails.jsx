import { useParams, Link } from "react-router-dom";
import { blogs, featuredBlog } from "../Data/blogData";
import style from "../css/BlogDetails.module.css";

function BlogDetails({ featured }) {
  const { slug } = useParams();

  const clickedBlog = blogs.find((blog) => blog.slug === slug);

  // Featured article
  if (featured) {
    return (
      <article className={style.article}>
        <span className={style.category}>Featured</span>

        <h1>{featuredBlog.title}</h1>

        <p className={style.date}>August 7, 2026</p>

        <img
          src={featuredBlog.image || "https://placehold.co/1200x500"}
          alt={featuredBlog.title}
          className={style.heroImage}
        />

        <div className={style.content}>
          <p className={style.introduction}>{featuredBlog.para}</p>

          <h2>Introduction</h2>

          <p>
            Learning React requires more than simply learning the library
            itself. A strong frontend developer needs a solid understanding of
            HTML, CSS, JavaScript, React and the tools used around them.
          </p>

          <h2>1. Learn HTML and CSS</h2>

          <p>
            Start by understanding how websites are structured and styled. Learn
            semantic HTML, CSS layouts, Flexbox, Grid, responsive design and
            basic accessibility.
          </p>

          <h2>2. Master JavaScript</h2>

          <p>
            Before going deep into React, make sure you understand JavaScript
            fundamentals such as variables, functions, arrays, objects, loops,
            promises, async/await and modules.
          </p>

          <h2>3. Learn React</h2>

          <p>
            Once your JavaScript foundation is strong, move into React. Learn
            components, props, state, events, hooks, conditional rendering and
            forms.
          </p>

          <h2>4. Build Projects</h2>

          <p>
            Don't stop at tutorials. Build projects that require you to solve
            problems yourself. Projects are where your understanding becomes
            practical.
          </p>

          <h2>Conclusion</h2>

          <p>
            Becoming a good frontend developer takes time. Focus on
            understanding the fundamentals, building projects and continuously
            improving your skills.
          </p>
        </div>

        <Link to="/blog" className={style.backButton}>
          ← Back to Blogs
        </Link>
      </article>
    );
  }

  // Normal article doesn't exist
  if (!clickedBlog) {
    return <h1 className={style.notFound}>Blog not found</h1>;
  }

  // Normal article
  return (
    <article className={style.article}>
      <span className={style.category}>{clickedBlog.category}</span>

      <h1>{clickedBlog.title}</h1>

      <p className={style.date}> {clickedBlog.date}</p>

      <img
        src={clickedBlog.image || "https://placehold.co/1200x500"}
        alt={clickedBlog.title}
        className={style.heroImage}
      />

      <div className={style.content}>
        <p className={style.introduction}>{clickedBlog.description}</p>

        <h2>Introduction</h2>

        <p>
          In this article, we'll explore the important concepts behind{" "}
          {clickedBlog.title.toLowerCase()}. The goal is to understand the topic
          clearly and learn how it can be applied in real-world projects.
        </p>

        <h2>Understanding the Basics</h2>

        <p>
          Before moving into advanced concepts, it is important to understand
          the fundamentals. A strong foundation makes it easier to solve
          problems and work with more complex applications.
        </p>

        <h2>Practical Examples</h2>

        <p>
          The best way to understand a programming concept is to use it. Try
          creating small examples and gradually increase the complexity of your
          projects.
        </p>

        <h2>Key Takeaways</h2>

        <ul>
          <li>Understand the fundamentals first.</li>
          <li>Practice with small examples.</li>
          <li>Build real-world projects.</li>
          <li>Keep improving through practice.</li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          Keep practicing and focus on understanding concepts rather than simply
          memorizing code. Consistent practice is what turns knowledge into
          practical skills.
        </p>
      </div>

      <Link to="/blog" className={style.backButton}>
        ← Back to Blogs
      </Link>
    </article>
  );
}

export default BlogDetails;
