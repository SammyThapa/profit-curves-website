import style from "../css/AboutUs.module.css";
import { GoGoal } from "react-icons/go";
import { FaLightbulb } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { FaClipboardCheck } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";

import { PiCertificateDuotone } from "react-icons/pi";

import { GiOpenBook } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

function AboutUs() {
  const navigate = useNavigate();

  const exploreCourses = () => {
    navigate("/courses/All");
  };
  return (
    <div className={style.mainCon}>
      {/* HERO */}

      <section className={style.hero}>
        <span>ABOUT PROFIT CURVE</span>

        <h1>Empowering Students to Build Better Careers</h1>

        <p>
          We help students develop practical skills, gain confidence, and
          prepare themselves for their professional journey.
        </p>
      </section>

      {/* WHO WE ARE */}

      <section className={style.whoWeAre}>
        <div className={style.imageContainer}>
          <img
            src="https://dummyimage.com/600x400/000/fff"
            alt="Students learning"
          />
        </div>

        <div className={style.whoContent}>
          <span>WHO WE ARE</span>

          <h2>Learning That Goes Beyond the Classroom</h2>

          <p>
            Profit Curve is focused on helping students develop practical,
            career-oriented skills through structured learning and guidance.
          </p>

          <p>
            Our goal is to bridge the gap between what students learn and what
            they need to apply in real-world situations.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}

      <section className={style.missionSection}>
        <div className={style.sectionHeading}>
          <span>OUR PURPOSE</span>

          <h2>Helping Students Move Forward</h2>
        </div>

        <div className={style.missionGrid}>
          <div className={style.infoCard}>
            <div className="flex justify-center items-center gap-2">
              {" "}
              <GoGoal className="text-[#2563eb] text-2xl" />
              <h3>Our Mission</h3>
            </div>

            <p>
              To simplify the world of financial markets and empower individuals
              with the knowledge, skills, and discipline to make informed
              decisions. At Profit Curve, we believe that true financial growth
              begins with education. Through structured courses, practical
              learning, market insights, and a strong focus on risk awareness,
              we aim to help learners build a smarter relationship with money
              and financial markets.
            </p>
          </div>

          <div className={style.infoCard}>
            <div className="flex justify-center items-center gap-2">
              {" "}
              <FaLightbulb className="text-[#2563eb] text-2xl" />
              <h3>Our Vision</h3>
            </div>

            <p>
              To create a generation of financially aware individuals who don't
              just follow the market — they understand it. We envision a future
              where financial knowledge is accessible to everyone, where people
              make decisions based on understanding rather than hype, and where
              learning becomes the foundation of long-term financial confidence.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENT */}

      <section className={style.different}>
        <div className={style.sectionHeading}>
          <span>WHY PROFIT CURVES?</span>

          <h2>What We Believe</h2>
        </div>

        <div className={style.featureGrid}>
          <div className={style.featureCard}>
            <GiOpenBook className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />
            <h3>Learn Before You Earn.</h3>

            <p>Knowledge should come before capital.</p>
          </div>

          <div className={style.featureCard}>
            <FaBrain className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />
            <h3>Understand Before You Act.</h3>

            <p>Every financial decision deserves informed thinking.</p>
          </div>

          <div className={style.featureCard}>
            <GiMeditation className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />
            <h3>Discipline Over Emotion.</h3>

            <p>Markets reward process, not impulsive decisions.</p>
          </div>

          <div className={style.featureCard}>
            <MdSecurity className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />
            <h3>Risk Before Returns.</h3>

            <p>
              Understanding what you can lose is just as important as
              understanding what you can gain.
            </p>
          </div>

          <div className={style.featureCard}>
            <MdTrendingUp className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />
            <h3>Growth Through Learning.</h3>

            <p>
              The strongest investment you can make is in your own financial
              knowledge.
            </p>
          </div>
          <div className={style.featureCard}>
            <FaHandshake className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />
            <h3>Our Promise</h3>

            <p>
              We don't promise you profits. We promise to help you build the
              knowledge to understand the journey.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}

      <section className={style.approach}>
        <div className={style.approachContent}>
          <span>OUR APPROACH</span>

          <h2>Learn. Understand. Decide . Grow.</h2>

          <p>
            We believe that learning becomes meaningful when students can apply
            what they learn. Our approach combines structured courses, practical
            learning, and continuous guidance.
          </p>
        </div>

        <div className={style.steps}>
          <div>
            <span>01</span>
            <h3>Learn</h3>
            <p>
              Learn the fundamentals of markets, price action, and trading
              concepts.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Understand</h3>
            <p>
              Understand market structure, setups, risk management, and trading
              psychology.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Decide</h3>
            <p>
              Learn to analyze the market and make disciplined, informed trading
              decisions.
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>Grow</h3>
            <p>
              Develop consistency, improve your execution, and grow as a
              confident trader.
            </p>
          </div>
        </div>
      </section>
      {/* LEARNING JOURNEY */}

      <section className={style.learningJourney}>
        <div className={style.sectionHeading}>
          <span>PROFIT CURVE LEARNING JOURNEY</span>

          <h2>From Learning to Practical Experience</h2>

          <p>
            Our structured learning journey helps students build their knowledge
            step by step before progressing to practical trading experience.
          </p>
        </div>

        <div className={style.journeyGrid}>
          {/* STEP 1 */}

          <div className={style.journeyCard}>
            <FaClipboardCheck className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />

            <h3>Free Live Assessment Session</h3>

            <p>
              Every student begins with a live assessment session. During this
              session, our mentors evaluate your current trading knowledge,
              experience level, learning style, and trading mindset. Since every
              trader is unique, this assessment helps us recommend the most
              suitable learning path for your goals.
            </p>
          </div>

          {/* STEP 2 */}

          <div className={style.journeyCard}>
            <FaBookOpen className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />

            <h3>Personalized Recorded Learning Program</h3>

            <p>
              Based on your assessment, you will receive access to carefully
              selected recorded training sessions designed specifically for your
              skill level. These lessons cover market fundamentals, trading
              concepts, and different financial markets, helping you build a
              strong foundation before moving to live mentorship.
            </p>
          </div>

          {/* STEP 3 */}

          <div className={style.journeyCard}>
            <FaChalkboardTeacher className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />

            <h3>Live Mentorship & Practical Training</h3>

            <p>
              Once your fundamentals are complete, you join live online
              mentoring sessions covering market analysis, strategy development,
              risk and money management, trading psychology, doubt solving, and
              trade planning.
            </p>
          </div>

          {/* STEP 4 */}

          <div className={style.journeyCard}>
            <FaChartLine className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />

            <h3>Performance Evaluation</h3>

            <p>
              To ensure consistent progress, you will complete structured
              assessments and practical tests throughout the program. Students
              must successfully pass each stage before advancing to the next
              level, ensuring they develop the skills required for professional
              trading.
            </p>
          </div>

          {/* STEP 5 */}

          <div className={style.journeyCard}>
            <FaUserTie className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />

            <h3>Practical Trading Experience</h3>

            <p>
              After successfully completing the training and assessments,
              eligible students will receive access to a Demo Account or a
              Funded Trading Account (subject to eligibility and program terms).
              This stage allows students to apply their knowledge in real market
              conditions and build confidence through practical experience.
            </p>
          </div>

          {/* STEP 6 */}

          <div className={style.journeyCard}>
            <PiCertificateDuotone className="my-0 mx-auto text-4xl mb-10 text-[#2563eb]" />

            <h3>Profit Curves Certification</h3>

            <p>
              Upon successful completion of the entire program, students will
              receive an official{" "}
              <span className="font-bold">
                Profit Curves Certificate of Completion
              </span>
              , recognizing their trading knowledge, practical skills, and
              successful completion of the Profit Curves training program.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={style.cta}>
        <h2>Ready to Take the Next Step?</h2>

        <p>Explore our courses and start building skills for your future.</p>

        <button onClick={exploreCourses}>Explore Courses</button>
      </section>
    </div>
  );
}

export default AboutUs;
