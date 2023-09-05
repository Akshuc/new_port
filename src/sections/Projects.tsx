import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project.png",
      projectName: "Movix",
      projectLink: "https://jade-selkie-562038.netlify.app/",
      projectDescription:
        "The Movie Web App is a user-friendly and interactive web application designed to provide movie enthusiasts with a comprehensive platform to explore and discover information about movies. The app offers a rich and engaging experience, allowing users to browse an extensive database of movies, view details, and access a wide range of information.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "MovieApi",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://jade-selkie-562038.netlify.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Airbus",
      projectLink: "https://devsj-airbus.netlify.app/",
      projectDescription:
        "Airbus web app is an online platform that allows users to search, compare, and book flights for their travel needs. It offers a user-friendly interface where travelers can enter their departure and destination cities, travel dates, and passenger details to search for available flights. The app typically integrates with multiple airlines and flight booking systems, providing users with a wide range of flight options from various carriers. Users can filter search results based on preferences such as price, flight duration, stopovers, and airline preferences.",
      projectTech: [
        "React",
        "Sockets",
        "Tailwind css",
        "Redux",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://devsj-airbus.netlify.app/",
      },
    },
    {
      image: "/projectH.png",
      projectName: "JSM Headphones",
      projectLink: "https://ecommerce-sanity-stripe-teal-two.vercel.app/",
      projectDescription:
        "The JSM Headphones is a user-friendly platform catering to headphone enthusiasts and music lovers. It offers a wide range of headphones from top brands, complete with detailed product pages, customer reviews, and ratings. Users can compare headphones, create wishlists, and enjoy a secure checkout process. With a recommendation engine, informative guides, and social sharing options, the app aims to provide an immersive and personalized shopping experience for all users.",
      projectTech: [
        "React",
        "Node.js",
        "Stripe",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://ecommerce-sanity-stripe-teal-two.vercel.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
