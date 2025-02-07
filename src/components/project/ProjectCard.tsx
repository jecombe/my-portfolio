import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrls?: { name: string; url: string }[];
  previewUrl?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrls = [], previewUrl, technologies }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
      ></div>

      <div className="text-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>

        <div className="mt-4">
          <h4 className="text-white font-semibold mb-2">Technologies :</h4>
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <li key={index} className="bg-gray-700 px-2 py-1 text-sm rounded">{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {gitUrls.length > 0 ? (
            gitUrls.map((repo, index) => (
              <Link key={index} href={repo.url} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2 text-blue-400 hover:text-white transition">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>{repo.name}</span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No GitHub link</p>
          )}

          {previewUrl && previewUrl !== "#" && (
            <Link href={previewUrl} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 text-blue-400 hover:text-white transition">
                <EyeIcon className="h-5 w-5" />
                <span>Live Demo</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
