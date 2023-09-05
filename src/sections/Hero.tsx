import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
       My name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
       Joseph Stanley Geddam.
      </motion.h2>
      <motion.h1
        className="hero-title-2"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
      I am a Front-End UI/UX lead developer at CVS Health.
      </motion.h1>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        with over 12 years of experience working in the technology and web development industry. I specialize in creating
        highly experienced user interfaces (UI) and user experiences (UX). My current role is at CVS Health, where I have
        been working for around 3 years, focusing on React front end development. I have developed over number of CVS Health's
        web applications, helping to make CVS Health’s patient experience simple and uniform throughout the enterprise. I am 
        experienced in creating complex solutions that meet user needs in a cost-effective manner. My passion is to develop 
        seamless designs that create intuitive customer experiences at&nbsp;.
        <Link href="https://www.cvshealth.com/" target="_blank" className="link">
           CVS Health.
        </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        {/* <Button
          text="Check out my course"
          link="https://youtube.com/kishansheth21"
        /> */}
      </motion.div>
    </div>
  );
}

export default Hero;



