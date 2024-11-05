import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Button from "../Button";
import Heading from "../Heading";
import Container from "../Container";
import animePlus from "../../assets/anime+.png";

const Projects = () => {
  const { isNorwegian } = useLanguage();

  const projects = [
    {
      title: "Anime Plus",
      description: isNorwegian
        ? "En anime streaming-plattform som lar brukere utforske og se på deres favoritt anime serier. Inneholder funksjoner som søk, filtrering, og personlige anbefalinger."
        : "An anime streaming platform that allows users to explore and watch their favorite anime series. Features include search, filtering, and personalized recommendations.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      liveLink: "https://anime-plus-tau.vercel.app/",
      githubLink: "https://github.com/kamilz92/anime_plus",
      image: animePlus,
    },
  ];

  return (
    <Container id="projects" className="scroll-m-16 md:scroll-mt-0">
      <div className="mb-12">
        <Heading heading="h2">
          {isNorwegian ? "Mine Prosjekter" : "My Projects"}
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              image={project.image}
              viewLiveText={isNorwegian ? "Se Live" : "View Live"}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;

const ProjectCard = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
  viewLiveText,
}) => {
  const handleLiveLinkClick = () => {
    window.open(liveLink, "_blank");
  };

  const handleGithubLinkClick = () => {
    window.open(githubLink, "_blank");
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primaryLight/10 dark:bg-primaryDark/10 text-primaryLight dark:text-primaryDark rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <Button
            version={1}
            icon={CiLink}
            onClick={handleLiveLinkClick}
          >
            {viewLiveText}
          </Button>
          <Button
            version={2}
            icon={FaGithub}
            onClick={handleGithubLinkClick}
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};
