"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../TabButton";
import { LinearProgress } from "@mui/material"; // Ajoutez cette importation pour la barre de progression

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Langages */}
        <div>
          <h3 className="font-semibold text-lg">Languages</h3>
   
          <p>Typescript</p>
          <LinearProgress variant="determinate" value={100} sx={{ height: 10 }} />
          <p>Solidity</p>
          <LinearProgress variant="determinate" value={75} sx={{ height: 10 }} />
          <p>Python</p>
          <LinearProgress variant="determinate" value={50} sx={{ height: 10 }} />
          <p>C</p>
          <LinearProgress variant="determinate" value={40} sx={{ height: 10 }} />
        </div>

        {/* Bases de données */}
        <div>
          <h3 className="font-semibold text-lg">Databases</h3>
          <p>PostgreSQL / SQL</p>
          <LinearProgress variant="determinate" value={70} sx={{ height: 10 }} />
          <p>MongoDb</p>
          <LinearProgress variant="determinate" value={85} sx={{ height: 10 }} />
          <p>InfluxDb</p>
          <LinearProgress variant="determinate" value={80} sx={{ height: 10 }} />
          <p>TypeORM</p>
          <LinearProgress variant="determinate" value={90} sx={{ height: 10 }} />
          
        </div>

        {/* ORM */}
        <div>
          <h3 className="font-semibold text-lg">WEB</h3>
          <p>Node.js</p>
          <LinearProgress variant="determinate" value={90} sx={{ height: 10 }} />
          <p>Next.js</p>
          <LinearProgress variant="determinate" value={75} sx={{ height: 10 }} />
          <p>React.js</p>
          <LinearProgress variant="determinate" value={70} sx={{ height: 10 }} />
          <p>HTML / CSS</p>
          <LinearProgress variant="determinate" value={60} sx={{ height: 10 }} />

        </div>

        {/* Outils & Bibliothèques */}
        <div>
          <h3 className="font-semibold text-lg">Devops</h3>
          <p>Git</p>
          <LinearProgress variant="determinate" value={90} sx={{ height: 10 }} />
          <p>Grafana</p>
          <LinearProgress variant="determinate" value={64} sx={{ height: 10 }} />
          <p>CI/CD Pipeline</p>
          <LinearProgress variant="determinate" value={58} sx={{ height: 10 }} />
          <p>Terraform</p>
          <LinearProgress variant="determinate" value={20} sx={{ height: 10 }} />
        </div>

 

      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>42 School (takes a project-based approach) FR</li>
        <li>
          BTS SIO (Advanced Technician Certificate in IT Services for
          Organizations) FR
        </li>
        <li>
          BAC STMG (Information and Management System French Baccalaureate) FR
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about.webp" width={500} height={500} alt={""} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
          Born in the mountains of Savoie, I am above all a passionate
          computer enthusiast, even more so than the mountains. Since my
          teenage years, I have been interested in this field. I have had the
          opportunity to work in companies related to blockchain and the
          crypto space. Thanks to my jobs in this field, I was able to improve
          my learning abilities and achieve a higher level of precision.
          Always looking for new technological domains and projects.
        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
        </div>
        <div className="mt-8">
          {
            TAB_DATA.find((t) => t.id === tab)?.content ?? (
              <p>Content not found.</p>
            )
          }
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default AboutMe;
