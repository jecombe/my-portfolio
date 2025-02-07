"use client"
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiencesData = [
  {
    title: "Full Stack Developer",
    company: "Smardex / RA2Tech",
    companyUrl: "https://www.smardex.io",
    location: "Montreux, Switzerland",
    date: "April – July 2024",
    description: [
      "Web application to analyze the transactions of smart contract and integrate a swap module for ERC20 token using NextJs, Docker, Typescript, PostgreSQL, SSL / HTTPS.",
      "Update libraries Viem 1.0 to 2.0 for Smardex alert package.",
      "Monitoring price ETH/USD with two oracles API (Pyth and Redstone) using Docker compose, InfluxDB, Grafana, Typescript, Node.js, Axios, SSL / HTTPS.",
      "Extract data from InfluxDB to display with unchart in Next.js",
      "Helped with bug fixes.",
      "CI/CD, Git, pull requests, AWS LightSail, Open Tofu (Terraform).",
    ],
  },
  {
    title: "Backend Developer",
    company: "Rebrain.ai",
    companyUrl: "https://www.rebrain.ai",
    location: "Lyon, France",
    date: "October 2020 – April 2023",
    description: [
      "Creation from scratch of a cryptocurrency exchange trading library in Node.js & TypeScript for centralized exchange API (REST & WebSocket).",
      "Proof of concept Flash-loans strategies using Solidity and Node.js (Aave, Uniswap, Sushiswap, Opensea..).",
      "Monitoring trading bot (EC2 AWS) and blockchain data. Analysis of token volumes, prices, circulation, and tweets using InfluxDB & Grafana.",
      "Supervised an intern and managed pull requests. Setup JavaScript tests with Jest.",
    ],
  },
  {
    title: "Backend Developer (Internship)",
    company: "Pockero",
    companyUrl: "#",
    location: "Montreal, Canada",
    date: "April – July 2024",
    description: [
      "Creation of smart contracts using Solidity for Ethereum and C++ for EOS, generating ERC20 tokens for the reward system.",
      "Built additional smart contracts to record completed task information.",
      "Developed an API-REST using Express and Firebase.",
      "Participated in a crypto EOS event in Montreal.",
      "Created a Node.js script to retrieve application information via the smart contract.",
    ],
  },
  {
    title: "Android Developer",
    company: "Solti",
    companyUrl: "#",
    location: "Grenoble, France",
    date: "January – March 2017",
    description: [
      "Developed a Java Android application (SoltiScan) for inventory management using QR code scanning.",
      "Ensured data transfer to a database or email post-process.",
      "Created a tutorial video for the application on YouTube.",
      "Worked autonomously on the project.",
    ],
  },
  {
    title: "Web Developer",
    company: "Merci Creative",
    companyUrl: "#",
    location: "Bourg Saint Maurice, France",
    date: "May – June 2016",
    description: [
      "Created a landing page for a catering client using HTML, CSS, and Apache PHP.",
      "Participated in pair programming sessions.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experiences">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Experience
      </h2>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(38, 62, 78)",
              color: "#fff",
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(63, 134, 192)" }}
            date={experience.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {experience.title}
            </h3>
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#ddd",
                marginBottom: "10px",
              }}
            >
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4DA8DA", textDecoration: "none" }}
              >
                {experience.company}
              </a>
            </h4>
            <h5
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
                marginBottom: "10px",
              }}
            >
              {experience.location}
            </h5>
            <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
              {experience.description.map((task, i) => (
                <li key={i} style={{ marginBottom: "5px" }}>
                  {task}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
