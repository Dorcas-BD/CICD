import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  technologies: string;
}

const projects: Project[] = [
  {
    title: "Star Wars Movies",
    description:
      "This Star Wars movie website provides comprehensive information about the movie series, including release dates and brief plot summaries for each film. It also features trailers for every movie, fetched through the YouTube API. The SWAPI data is fetched using the Tanstack React Query.",
    link: "https://star-wars-moviess.netlify.app/",
    imgSrc: "/starwar.jpg",
    technologies:
      "React, CSS, Star Wars API,  Tanstack React Query, Youtube API",
  },
  {
    title: "Movie Box",
    description:
      "A movie website showcasing a search option and user sign-in functionality. The platform presents a curated collection of featured movies, providing details such as release dates, IMDb ratings, and genres sourced from theMoviedb API. Users have the option to view trailers and delve into a broader range of movies for an enhanced cinematic experience.",
    link: "https://movie-box-tymr.vercel.app/",
    imgSrc: "/work6.PNG",
    technologies: "Nextjs, CSS, TMDb API, Youtube API",
  },
  {
    title: "Task Manager",
    description:
      "A task management website allows users to securely manage tasks by logging in with their Google accounts. Users can add, edit, and delete multiple tasks, streamlining task organization and productivity within the platform.",
    link: "https://task-manager-three-amber.vercel.app/",
    imgSrc: "/taskmanage.jpg",
    technologies: "Nextjs, CSS, Tailwind, Firebase",
  },
  {
    title: "Farm Logistics",
    description:
      "A logistics website specializing in delivering farm produce efficiently. They offer various trucks for different goods and prioritize timely delivery, trackability, and insurance. Customers can easily request, pay for, and receive their goods, with FAQs addressing common concerns. Contact information is provided for inquiries",
    link: "https://farm-logistics-puce.vercel.app/",
    imgSrc: "/work1.png",
    technologies: "HTML, CSS, and Javascript",
  },
  {
    title: "Pizza Website",
    description: "A pizza delivery website UI built with React and CSS.",
    link: "https://pizzaa-website.netlify.app/",
    imgSrc: "/work2.png",
    technologies: "React, CSS",
  },
  {
    title: "Blockchain Web-App",
    description:
      "A Fullstack Web3 blockchain application allowing users to access and transfer their balances to other addresses.",
    link: "https://blockchain-krypt-react-app.netlify.app/",
    imgSrc: "/work3.png",
    technologies: " React, Tailwind CSS, Vite, Solidity, Ether and Hardhat",
  },
  {
    title: "Calculator",
    description:
      "An elementary calculator web application enabling users to perform basic arithmetic operations such as addition, subtraction, multiplication, division, modulus, and remainder.",
    link: "https://calculate-it.netlify.app",
    imgSrc: "/work4.png",
    technologies: "HTML, CSS, and JavaScript",
  },
  {
    title: "Note App",
    description: "A note taking react Application.",
    link: "https://react-note-taking-app.netlify.app",
    imgSrc: "/work5.png",
    technologies: "React",
  },
];

const Projects = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="work-container bd-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-item">
            <a target="_blank" href={project.link} className="work-img">
              <img src={project.imgSrc} alt="" />
            </a>
            <div className="work-info">
              <h3 className="work-title">{project.title}</h3>
              <p className="work-description">{project.description}</p>
              <p className="technologies">
                Technologies: {project.technologies}
              </p>
              <a target="_blank" href={project.link} className="work-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
