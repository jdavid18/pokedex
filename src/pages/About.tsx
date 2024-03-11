import React from "react";
import Wrapper from "../sections/Wrapper";
import { FaBookOpen, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <h1 className="profile-text">Hi, I am Albert</h1>
      <h2 className="profile-text">The creator of this pokedex</h2>
      <h4 className="profile-text">
      </h4>
      <div className="profile-links">
        <a href="https://github.com/albertboyd">
          <FaGithub />
        </a>
        <a href="https://albert-boyd.vercel.app/">
          <FaBookOpen />
        </a>
        <a href="https://www.linkedin.com/in/albertboyd">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
