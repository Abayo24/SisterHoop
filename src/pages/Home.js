import React from 'react';
import Navbar from "../components/Navbar";
import bannerImage from '../assets/banner.png';
import fmp from '../assets/fmp.jpg';
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const isAuthenticated = false; 
    return (
      <div className="home">
        <Navbar isAuthenticated={isAuthenticated} />
        <img
          src={bannerImage}
          id="home"
          alt="Banner"
          className="banner-image h-100"
        />
        <div className="container-fluid features w-100" id="features">
          <div className="row row-cols-3 justify-content-center">
            <div className="col p-5 m-3 w-25 feature">
              <h3 className=" text-center pb-3">
                Join us on a fun-filled Hoops Hunt For Her
              </h3>
              <p className="text-center">
                where we invite you to explore our specially designated courts
                available exclusively for ladies during select hours. Discover
                these unique spaces, perfect for enjoying basketball in a
                welcoming and empowering environment.
              </p>
            </div>
            <div className="col p-5 m-3 w-25 feature">
              <h3 className="text-center pb-3">
                Uncover Your Ultimate Hoops Hangout
              </h3>
              <p className="text-center">
                Uncover everything you need to know about your ultimate hoops
                hangout. With detailed information at your fingertips, you can
                easily view the court's name, exact address, and all the
                available facilities .Our platform ensures you have all the
                details to find the perfect spot for your basketball sessions
              </p>
            </div>
            <div className="col p-5 m-3 w-25 feature">
              <h3 className="text-center pb-3">
                Join and schedule pickup games!
              </h3>
              <p className="text-center">
                Invite players to participate in casual basketball games at
                various courts. Simply browse through available games, connect
                with other players, and enjoy the camaraderie of the court. With
                features designed for convenience and community, discovering
                your next pickup game has never been more straightforward.
              </p>
            </div>
          </div>
          <div className="col p-5 text-center">
            <iframe
              title="Sisterhoop Seach Feature"
              width="800"
              height="450"
              src="https://www.youtube.com//embed/sJHKFNCEn5I"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="container-fluid text-center about w-100">
          <div className="about-section">
            <h1 className="fw-bold p-5" id="about">
              Story Behind SisterHoop
            </h1>
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    src={fmp}
                    className="rounded"
                    alt="people playing bball"
                  />
                </div>
                <div class="col m-4 p-5">
                  <p>
                    SisterHoop was born from a personal experience that
                    highlighted a significant gap in the basketball community.
                    One day, as I was heading to my local basketball court for a
                    pickup game, I couldn't help but notice that the court was
                    dominated by boys. As a female basketball enthusiast, I
                    often felt shy about joining them because of the intense
                    competition for spots in the game.
                  </p>
                  <p>
                    This repeated experience sparked an idea: creating an app
                    specifically designed to connect female basketball players.
                    SisterHoop aims to provide a safe and encouraging
                    environment where female athletes can play, improve, and
                    enjoy the game without feeling overshadowed or sidelined.
                  </p>
                  <p>
                    The development of SisterHoop is a significant part of my
                    journey at Holberton School, serving as a Portfolio Project
                    that showcases the skills and knowledge I've gained. You can
                    learn more about Holberton School{" "}
                    <a
                      href="https://www.holbertonschool.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="footer container-fluid m-0" id="developer">
              <h1 className="fw-bold p-5" id="about">
                Meet the Mind Behind the Website
              </h1>
              <div className='p-5'>
                <strong>My Name is Abayo Akinyi</strong>
                <p className="p-2">Connet with me using the following links</p>
                <a
                  href="https://www.linkedin.com/in/abayo-akinyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social" />
                </a>
                <a
                  className="social"
                  href="https://github.com/Abayo24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="social" />
                </a>
                <a
                  href="https://x.com/LizAbayo1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="social" />
                </a>
                <p>
                  © 2024 SisterHoop. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home