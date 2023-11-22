import React from "react";
import "../../styles/styles.css";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";

const Hero = () => {
  return (
    <section className="home">
      <div className="home-data">
        <div className="hero-text">
          <h1 className="home-heading">
            Hello, I'm <span className="title-color">Dorcas Bamisile</span>
            <br />I am a Software Engineer
          </h1>

          <p className="hero-text-p">
            Proficient Software Engineer with expertise in JavaScript,
            TypeScript, React, Next.js, and React Native. Experience in Web3,
            utilizing Solidity, Hardhat, and Truffle for decentralized
            applications. Passionate about open source contributions and driven
            to create innovative, user-centric web and mobile experiences.
          </p>

          <div className="hie-btn">
            <Link href="#contacts" className="hire-btn">
              Hire Me
            </Link>
          </div>
        </div>
        <div className="home-img">
          <div className="computer-animation"></div>
          <img className="hero-img" src="/perfil.png" alt="Dorcas Image" />
        </div>
      </div>
      <div className="home-social">
        <a
          href="https://www.linkedin.com/in/dorcasbamisile"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-linkedin" data-testid="linkedin-icon"></i>
        </a>
        <a
          href="https://www.twitter.com/Dorcas_BD"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-twitter" data-testid="twitter-icon"></i>
        </a>
        <a
          href="https://www.github.com/Dorcas-BD"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-github" data-testid="github-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
