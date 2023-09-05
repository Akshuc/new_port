import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Joseph Stanley Geddam, and I am passionate about creating 
            digital content for the web. My interest in web development was
            sparked in my initial college days.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our users and exceed their
            expectations at{" "}
            <Link href="https://www.cvshealth.com/" className="link" target="_blank">
              CVS Health Group.
            </Link>
          </p>

          <p className="about-grid-info-text">
          Additionally, I share my knowledge and passion with the world through my Free sessions,
          where I demonstrate how to build full-stack applications.Apart from programming, I also
          have a keen interest in public speaking, music, and admiring art. I am often seen sharing
          my knowledge in the programming conferences and webinars. I am a cheerful person and I 
          believe in making the work environment vibrant and friendly
          </p>
          <p className="about-grid-info-text">
          I am currently leading the project of redesigning the online and in-store customer experience for CVS Health.
          The primary objectives of this project are to revamp the user interface and user experience to create a more
          intuitive shopping experience for customers, while also increasing CVS’s digital presence. The project also
          involves creating a more efficient and personalized shopping experience for customers by improving the usability
          and accessibility of the website and in-store applications. This includes focusing on the development of the customer
          profiling, loyalty and rewards programs, in-store experience, product discovery and website navigation. Additionally,
          this project involves the development of an optimized design for mobile experiences that accommodates the needs of CVS Health’s
          growing number of customers on mobile devices. We also plan to integrate some popular marketing tools to
          facilitate efficient digital marketing strategies at.{" "}
            <Link
              className="link"
              target="_blank"
              href="https://www.cvshealth.com/services.html"
            >
              CVS Health services,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">

            <li className="about-grid-info-list-item">Java/J2EE</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Reactjs</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">C#</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Spring boot</li>
            <li className="about-grid-info-list-item">Jasper</li>
            <li className="about-grid-info-list-item">Github</li>
            <li className="about-grid-info-list-item">Mongo DB</li>
            <li className="about-grid-info-list-item">Next js</li>
            <li className="about-grid-info-list-item">Kafka js</li>
            <li className="about-grid-info-list-item">Spring</li>
            <li className="about-grid-info-list-item">Azure</li>
            <li className="about-grid-info-list-item">Sass</li>
            <li className="about-grid-info-list-item">Vue js</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">MY SQL</li>
            <li className="about-grid-info-list-item">Postgress SQL</li>
            <li className="about-grid-info-list-item">SQL Server</li>
            
          </ul>
        </div>
        
      </div>
    </motion.div>
  );
}

export default About;
