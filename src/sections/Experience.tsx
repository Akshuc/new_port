import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "CVS Healthcare",
      role: "Lead Developer Frontend UI/UX",
      url: "https://www.cvshealth.com/",
      start: "Jan 2020",
      end: "Present",
      shortDescription: [
        "Experienced in creating applications using JavaScript, jQuery, AngularJS, and React.js.",
        "Created user-friendly, interactive, and responsive front-end user interfaces using HTML5, CSS3, JavaScript, and React libraries",
        "Developed database logic using MongoDB and NoSQL in conjunction with SQL for more traditional Database needs",
        "Implemented DevOps solutions in Azure Cloud using CI/CD and Ansible, Jenkins, and PowerShell",
        "Developed automated test cases and employed test driven development using JUnit and Mockito",
        "Experience with deploying and managing applications in AWS, Azure, and other cloud environments",
        "Implemented Azure cloud services (PaaS and IaaS) as well as migrated On Premises solutions",
        "Utilized version control systems such as Git and CVS to track user activities and manage code versions",
        "Created custom directives and services to be used across projects using AngularJS",
        "Developed automated test cases and employed test driven development using JUnit and Mockito.",
      ],
    },
    {
      name: "Lowe's",
      role: "Lead Developer Frontend UI/UX",
      url: "https://www.lowes.com/",
      start: "April 2017",
      end: "january 2020",
      shortDescription: [
        "Defined and implemented the page design, responsiveness, color palette, typefaces, and branding guidelines throughout the e-commerce platform.",
        "Developed a rich custom UI/UX that allows users to intuitively navigate the site.",
        "Optimized user experience by creating Wireframes, Mockups, Prototypes, improvements of the UI/UX of existing and new product features.",
        "Implemented creative solutions to existing problems in the user interface.",
        "Improved the user interface of an e-commerce product page, which resulted in a 10% increase in page engagement.",
        "Designed and developed an efficient user survey process to better understand the needs for various stakeholders.",
        "Participated in a complete design process from user research to usability testing.",
        "Collaborated with a cross-functional team of developers, product owners, content strategists, and other stakeholders to ensure the best product design.",
        "Created iterations of prototypes to test usability and obtain feedback from stakeholders and users",
        "Developed user-friendly and engaging visual designs for the website.",
        
        
      ]
    },
    {
      name: "BNY MELLON",
      role: "UI Fullstack Developer",
      url: "https://www.bnymellon.com/apac/en.html",
      start: "Feb 2015",
      end: "March 2017",
      shortDescription: [
        "Developed and enhancing intuitive and user friendly web-app interfaces including graphic design and visual assets.",
        "Utilized HTML5, CSS3, JavaScript, and jQuery to have perfect structure, look & feel, and behavior of user experience.",
        "Integrated new UI components like sliders, drag and drop, date pickers etc.",
        "Created unique user interface elements with the help of jQuery, Ajax, and other frameworks.",
        "Developed prototypes, wireframes, user flows, and web page designs for user journeys to support the product vision of the Easycall application.",
        "Assisted users with identifying usability issues in the existing Easycall application and creating new User Interface designs.",
        "Implemented style-guides, design patterns, and annotation notes to update existing pages.",
        "Used Agile, Lean, Scrum, and Waterfall methodologies to enable the rapid development of the Easycall application.",
        "Converted Photoshop designs to HTML/CSS/JS prototypes with the help of UX/UI designers.",
      ],
    },
    {
      name: "Bayer",
      role: "UI DEVELOPER                                                                                                                                     ",
      url: "https://www.bayer.com/en/",
      start: "April 2013",
      end: "March 2015",
      shortDescription:[
        "Developed user interface designs for various Bayer web applications and mobile applications.",
        "Created low and high-fidelity wireframes and mockups to visualize the user experience across multiple platforms.",
        "Developed custom interactive prototypes and testing with user feedback sessions to improve user experience.",
        "Developed HTML and CSS to properly implement the user interface designs.",
        "Developed and maintained user interface design style guide and library which was shared and implemented across all projects.",
        "Worked closely with project managers, developers and stakeholders to ensure that product specifications and customer needs are met.",
        "Created and maintained detailed UX documentation and user flow diagrams to guide the development process of a product.",
        "Responsible for conducting usability tests to validate the usability of a design across multiple platforms.",
        "Designed user-friendly dashboards and data-driven charts, graphs and visualizations.",
        "Worked on optimizing the user experience of digital products such as websites and mobile applications.",
      ]

    },
    {
      name: "FRB",
      role: "Software Developer",
      url: "https://www.federalreserve.gov/",
      start: "Feb 2011",
      end: "March 2013",
      shortDescription:[
        "Developed a robust debit card and EFT/ACH Solutions system to facilitate secure transactions for businesses and customers.",
        "Created an asset liability management system to analyze and forecast financial risk and opportunities to enhance profitability through improved strategy and analysis.",
        "Developed a comprehensive consumer data management system to enable banks to assess customer needs and provide services accordingly.",
        "Developed customer account management system to allow customers to securely access and manage their accounts online. ",
        "Developed Payment processor integration system to facilitate processing of payments from customers to the banks.",
        "Developed cutting-edge mobile banking applications for both iOS and Android platforms.",
        "Implemented cybersecurity strategies to keep data safe and secure from cyber-attacks.",
        "Worked extensively on optimizing the online banking platform to offer a better user experience. ",
        "Developed automated processes to monitor and identify fraudulent transactions.",
        
      ]

    },
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
