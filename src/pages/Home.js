import React from 'react';
import Navbar from "../components/Navbar";
import bannerImage from '../assets/banner.png';
import courtDetails from '../assets/court details.png';
import "../styles/Home.css";

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
        <div className="container-fluid text-center features w-100">
          <h1 className="fw-bold p-5 heading" id="features">
            Features
          </h1>
          <div className="row row-cols-2">
            <div className="col p-5">
              <iframe
                title="Sisterhoop Seach Feature"
                width="560"
                height="315"
                src="https://www.youtube.com//embed/sJHKFNCEn5I"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col">
              <h1 className="fw-bold p-5">
                Join us on a fun-filled Hoops Hunt For Her
              </h1>
              <p className="p-5 pt-0">
                where we invite you to explore our specially designated courts
                available exclusively for ladies during select hours. Embark on
                a journey to discover these unique spaces, perfect for enjoying
                basketball in a welcoming and empowering environment. Whether
                you're a seasoned player or new to the game, embrace the
                opportunity to connect, compete, and celebrate the love of
                basketball with like-minded women. Get ready to make
                unforgettable memories on the court, where every dribble and
                shot is a testament to camaraderie and empowerment!"
              </p>
            </div>
            <div className="col">
              <h1 className="fw-bold p-5">
                Uncover Your Ultimate Hoops Hangout
              </h1>
              <p>
                Embark on your Court Quest and uncover everything you need to
                know about your ultimate hoops hangout. With detailed
                information at your fingertips, you can easily view the court's
                name, exact address, and all the available facilities. Whether
                you're looking for a full-court game, a practice hoop, or a
                place with extra amenities, our platform ensures you have all
                the details to find the perfect spot for your basketball
                sessions
              </p>
            </div>
            <div className="col text-center">
              <img
                src={courtDetails}
                alt="court details"
                className="img-fluid rounded courtDetails"
              />
            </div>
            <div className="col text-center">
              <img
                src={courtDetails}
                alt="court details"
                className="img-fluid rounded courtDetails"
              />
            </div>
            <div className="col">
              <h1 className="fw-bold p-5">
                Uncover Your Ultimate Hoops Hangout
              </h1>
              <p>
                Embark on your Court Quest and uncover everything you need to
                know about your ultimate hoops hangout. With detailed
                information at your fingertips, you can easily view the court's
                name, exact address, and all the available facilities. Whether
                you're looking for a full-court game, a practice hoop, or a
                place with extra amenities, our platform ensures you have all
                the details to find the perfect spot for your basketball
                sessions
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center about w-100">
          <div className="about-section" id="about">
            <h2>About SisterHoop</h2>
            <p>
              SisterHoop was born from a personal experience that highlighted a
              significant gap in the basketball community. One day, as I was
              heading to my local basketball court for a pickup game, I couldn't
              help but notice that the court was dominated by boys. As a female
              basketball enthusiast, I often felt shy about joining them. Their
              athleticism and masculinity sometimes made me worry about getting
              hurt or not even getting a chance to play because of the intense
              competition for spots in the game.
            </p>
            <p>
              This repeated experience sparked an idea: creating an app
              specifically designed to connect female basketball players.
              SisterHoop aims to provide a safe and encouraging environment
              where women can easily find and join basketball games. It's about
              fostering a community where female athletes can play, improve, and
              enjoy the game without feeling overshadowed or sidelined.
            </p>
            <p>
              The development of SisterHoop is a significant part of my journey
              at Holberton School, serving as a Portfolio Project that showcases
              the skills and knowledge I've gained. You can learn more about
              Holberton School{" "}
              <a
                href="https://www.holbertonschool.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>

            <h3>Meet the Team</h3>
            <ul>
              <li>
                <strong>Your Name</strong> <br />
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  GitHub
                </a>{" "}
                |
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Twitter
                </a>
              </li>
              <li>
                <strong>Team Member Name</strong> <br />
                <a
                  href="https://www.linkedin.com/in/teammemberprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |
                <a
                  href="https://github.com/teammemberprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  GitHub
                </a>{" "}
                |
                <a
                  href="https://twitter.com/teammemberprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Twitter
                </a>
              </li>
            </ul>

            <h3>Project Repository</h3>
            <p>
              Check out our GitHub repository for SisterHoop{" "}
              <a
                href="https://github.com/yourrepository/sisterhoop"
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
    );
};

export default Home