import React from 'react';
// import { FaReact, FaNodeJs, FaMobileAlt, FaServer, FaDatabase, FaBug } from 'react-icons/fa';

// Import images
import frontendImg from '../assets/img/frontend.png';
import backendImg from '../assets/img/backend.jpg';
import mobileImg from '../assets/img/mobile.avif';
import devopsImg from '../assets/img/devops.jpg';
import dataWhizImg from '../assets/img/data-whiz.jpg';
import qaChampionImg from '../assets/img/qachampion.jpeg';

interface Technology {
  title: string;
  description: string;
  img: string;
  delay: string;
  bgColor: string;
  // icon: JSX.Element; 
}

const technologies: Technology[] = [
  {
    title: "Front-End Experts",
    description: "ReactJS, HTML, CSS, JavaScript - Crafting modern, responsive, and user-friendly interfaces.",
    img: frontendImg,
    delay: "0.1s",
    bgColor: "bg-light",
    // icon: <FaReact className="text-primary text-3xl mb-4" /> // React icon
  },
  {
    title: "Back-End Powerhouses",
    description: "Node.js, Typescript, AWS, Python, Django, Flask - Building robust, scalable, and secure back-end solutions.",
    img: backendImg,
    delay: "0.3s",
    bgColor: "bg-light",
    // icon: <FaNodeJs className="text-primary text-3xl mb-4" /> // Node.js icon
  },
  {
    title: "Mobile Mavens",
    description: "Android, React Native - Developing cutting-edge mobile applications for a seamless user experience.",
    img: mobileImg,
    delay: "0.7s",
    bgColor: "bg-light",
    // icon: <FaMobileAlt className="text-primary text-3xl mb-4" /> // Mobile icon
  },
  {
    title: "DevOps Gurus",
    description: "Terraform, Ansible, GitHub, Docker - Automating and streamlining development and deployment processes.",
    img: devopsImg,
    delay: "0.5s",
    bgColor: "bg-light",
    // icon: <FaServer className="text-primary text-3xl mb-4" /> // Server icon
  },
  {
    title: "Data Whizzes",
    description: "Salesforce, SAP, Tableau, Power BI - Unlocking insights with powerful data analytics and business intelligence tools.",
    img: dataWhizImg,
    delay: "0.9s",
    bgColor: "bg-light",
    // icon: <FaDatabase className="text-primary text-3xl mb-4" /> // Database icon
  },
  {
    title: "QA Champions",
    description: "Software Testing, SDET - Ensuring top-notch quality and performance through rigorous testing methodologies.",
    img: qaChampionImg,
    delay: "1.1s",
    bgColor: "bg-light",
  },
];

const Technologies: React.FC = () => {
  return (
    <div className="container mx-auto sm:pt-0 md:pb-12 sm:px-10 lg:px-10 ">
      <div className="text-center mb-12">
        <h6 className="text-primary text-lg font-extrabold mb-2">TECHNOLOGIES</h6>
        <h1 className="text-4xl font-bold">Our Expertise</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${tech.bgColor}`}
          >
            <div className="relative h-48">
              <img className="absolute inset-0 w-full h-full object-cover" src={tech.img} alt={tech.title} />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-semibold mb-2">{tech.title}</h5>
              <p className="text-gray-600">{tech.description}</p>
              <div className="mt-4">
                <a href="/joining-form" className="btn-primary py-2 px-4 text-light bg-primary rounded-full">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
