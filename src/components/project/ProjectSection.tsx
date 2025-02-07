"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Decentralized GeoGuessr Game",
    description:
      "Participation in the Zama Bounty Challenge: Aims to use Fully Homomorphic Encryption (FHE) on-chain to create a game. I reproduction game GeoGuessr. The location data is represented as NFTs and stored on-chain confidentially using Zama's FHEvm. A token and reward system with NFTs is implemented.",
    image: "/images/geo.avif",
    tag: ["All", "Blockchain", "Web"],
    gitUrls: [
      { name: "smart contract", url: "https://github.com/jecombe/NFTGuessr" },
      { name: "frontend", url: "https://github.com/jecombe/prod" },
      { name: "backend", url: "https://github.com/jecombe/server_nftguessr" },
      { name: "subject", url: "https://github.com/zama-ai/bounty-program/issues/81" },
    ],
    technologies: [
      "Javascript",
      "Solidity",
      "Ethers",
      "Fhevm",
      "Next.js",
      "Nodej.js",
      "Express",
      "Google API",
    ],
  },
  {
    id: 2,
    title: "Flashloan Trading NFT",
    description:
      "The goal is to take advantage of the price difference between SudoSwap AMM and OpenSea. If an NFT is cheaper on OpenSea, I borrow the purchase amount from Aave, instantly buy the NFT on OpenSea, sell it on SudoSwap, repay the loan, and pocket the difference. In this project, the steps are : identify arbitrage opportunities, calculate transaction fees and deduct them to estimate profits, protect transactions against MEV attacks (like sandwich attacks) using Flashbots.",
    image: "/images/trading.jpg",
    tag: ["All", "Blockchain", "Algorithm"],
    gitUrls: [
      {
        name: "smart contract",
        url: "https://github.com/jecombe/Flashloan_Nft",
      },
      {
        name: "algo strategy",
        url: "https://github.com/jecombe/found_arbitrage",
      },
    ],
    previewUrl: "#",
    technologies: ["Solidity", "Ethereum", "NFT"],
  },

  {
    id: 3,
    title: "GitBook analyze LLM",
    description:
      "Script to download GitBook documents and have them analyzed by ChatGPT or DeepSeek. A prompt allows users to ask questions about the documentation.",
    image: "/images/termLlm.gif",
    tag: ["All", "Algorithm"],
    gitUrls: [
      { name: "code", url: "https://github.com/jecombe/gitbook-analyze-llm" },
    ],
    previewUrl: "#",
    technologies: ["Node.js", "Typescript", "OpenAi API"],
  },

  {
    id: 4,
    title: "Snipping bot bitget for future contract",
    description: "An algorithm that analyzes newly listed tokens in futures on Bitget. If the token is tradable, the algorithm monitors transactions for 30 minutes and determines whether to take a long or short position. Then, the algorithm manages closing the position, ideally in profit.",
    image: "/images/trading2.webp",
    tag: ["All", "Algorithm", "Blockchain"],
    gitUrls: [],
    previewUrl: "#",
    technologies: ["Node.js", "Typescript", "API BitGet"],
  },

  {
    id: 5,
    title: "Snipping bot uniswap",
    description: "An algorithm that analyzes new pools on Uniswap. Once a new token is detected, it is analyzed using an API (Honeypot). If the token is considered legitimate, the algorithm buys it. After acquiring the token, the algorithm attempts to sell it for a profit.",
    image: "/images/trading3.jpg",
    tag: ["All", "Algorithm", "Blockchain"],
    gitUrls: [],
    previewUrl: "#",
    technologies: ["Node.js", "Typescript", "Ethers", "Uniswap SDK", "HoneyPot API"],
  },
  {
    id: 6,
    title: "Stable Coin Analyse",
    description:
      "Small project to display information about stable coin, (depeg, tvl)",
    image: "/images/stable.png",
    tag: ["All", "Algorithm"],
    gitUrls: [
      {
        name: "frontEnd",
        url: "https://github.com/jecombe/stable-coin-analytics",
      },
    ],
    previewUrl: "https://stable-coins-analytics.vercel.app",
    technologies: ["Next.js", "Typescript", "Api Defilama", "unchart"],
  },
  {
    id: 7,
    title: "My portfolio",
    description: "my own portfolio",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrls: [
      { name: "frontEnd", url: "https://github.com/jecombe/my-portfolio" },
      { name: "url", url: "https://stable-coins-analytics.vercel.app" },
    ],
    previewUrl: "https://portfolio-jeremy-combe.vercel.app/",
    technologies: ["Next.js", "Typescript"],
  },
  {
    id: 8,
    title: "Staking Alert",
    description:
      "Staking Alert is a React Native application designed to provide alerts on the status of token staking. For example, it notifies users if a Baker (the entity responsible for staking) is still active and distributing rewards at the correct rate. The application also displays a list of Bakers, the amount delegated to each Baker, and other relevant information. It also notifies you as you receive your reward",
    image: "/images/stakeAlert.jpg",
    tag: ["All", "Web"],
    gitUrls: [{ name: "app", url: "https://github.com/jecombe/stakingAlert" }],
    previewUrl: "#",
    technologies: ["React Native", "mongoDB"],
  },
  {
    id: 9,
    title: "gallery nft",
    description:
      "Small project to display a collection and allow the user to like it.",
    image: "/images/galleryNft.png",
    tag: ["All", "Web"],
    gitUrls: [{ name: "Algo", url: "https://github.com/jecombe/gallery-nft" }],
    previewUrl: "#",
    technologies: ["Javascript", "Next.js"],
  },
  {
    id: 10,
    title: "Red tetris",
    description: "School group project (2 people)",
    image: "/images/tetris.jpeg",
    tag: ["All", "Web"],
    gitUrls: [{ name: "Algo", url: "https://github.com/jecombe/Red_tetris" }],
    previewUrl: "#",
    technologies: ["React.js", "Socket.io", "Javascript"],
  },
  {
    id: 11,
    title: "42SH",
    description: "School group project (2 people)",
    image: "/images/shell.png",
    tag: ["All", "Algorithm"],
    gitUrls: [{ name: "Algo", url: "https://github.com/jecombe/42sh" }],
    previewUrl: "#",
    technologies: ["C"],
  },
  {
    id: 12,
    title: "ft_ls",
    description: "School project (1 people)",
    image: "/images/ft_ls.png",
    tag: ["All", "Algorithm"],
    gitUrls: [{ name: "Algo", url: "https://github.com/jecombe/ft_Ls" }],
    previewUrl: "#",
    technologies: ["C", "Binary Three"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Blockchain"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Algorithm"
          isSelected={tag === "Algorithm"}
        />
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
              gitUrls={project.gitUrls}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
