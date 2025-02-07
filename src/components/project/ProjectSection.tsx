"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Decentralized Privacy Raffle",
    description:
      "A decentralized raffle using Zama's homomorphic encryption (fhevm). A user can create a raffle with a time limit, a prize, and a number of tickets. The purchase amounts of users are encrypted, as well as the addresses of the participants.",
    image: "/images/privacy_raffle.webp",
    tag: ["All", "Blockchain"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Decentralized GeoGuessr Game",
    description:
      "Reproduction of the GeoGuessr game in a decentralized manner. The goal is for a player to find the location of a GPS point. The GPS points are securely stored and encrypted on the blockchain using Fhevm.",
    image: "/images/geoguessr.webp",
    tag: ["All", "Blockchain", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Flashloan Trading NFT",
    description:
      "The goal of this project is to achieve profit through arbitrage between two NFT platforms using flash loans.",
    image: "/images/flashloan.webp",
    tag: ["All", "Blockchain"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Staking Alert",
    description:
      "A React Native app providing alerts on token staking status and baker activity.",
    image: "/images/staking_alert.webp",
    tag: ["All", "Mobile"],
    gitUrl: "#",
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Blockchain" isSelected={tag === "Blockchain"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
