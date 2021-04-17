import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import CodeIcon from "@material-ui/icons/Code";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GetAppIcon from "@material-ui/icons/GetApp";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import html from "../../Assets/Images/html.svg";
import css from "../../Assets/Images/css.svg";
import js from "../../Assets/Images/js.svg";
import react from "../../Assets/Images/react.svg";

const InfoPage = () => {
  return (
    <>
      <Box className="infoPage">
        <Box className="infoPage__container">
          <Box className="infoPage__right">
            <Box className="infoPage__right__container">
              <Box className="infoPage__experience">
                <h5>EXPERIENCE</h5>
                <Box className="infoPage__right__detail">
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <CodeIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2020 - PRESENT</p>
                      <h6>
                        FRONTEND TRAINEE <br /> <span>-CYBERSOFT ACADEMY</span>
                      </h6>
                      <span>
                        Implementing websites under requirement of Cybersoft
                        academy
                      </span>
                    </Box>
                  </Box>
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <LocalMallIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2019 - 2020</p>
                      <h6>
                        OPERATION MANAGER <br />{" "}
                        <span>-F-BOX PALVELUVARSTOT OY</span>
                      </h6>
                      <span>Control daily operation of warehouse</span>
                    </Box>
                  </Box>
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <LocalMallIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2018 - 2020</p>
                      <h6>
                        OPERATION MANAGER <br /> <span>-DL TRANSPORTS</span>
                      </h6>
                      <span>Control operation of company</span>
                    </Box>
                  </Box>
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <LocalMallIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2020 - PRESENT</p>
                      <h6>
                        CUSTOMER SERVICE MANAGER <br />{" "}
                        <span>-DL TRANSPORTS</span>
                      </h6>
                      <span>
                        Implementing websites under requirement of Cybersoft
                        academy
                      </span>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="infoPage__education">
                <h5>EDUCATION</h5>
                <Box className="infoPage__right__detail">
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <LaptopChromebookIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2020 - 2021</p>
                      <h6>
                        ADVANCED FRONTEND TRAINING <br />{" "}
                        <span>-CYBERSOFT ACADEMY</span>
                      </h6>
                      <button className="infoPage__education__button">
                        CERTIFICATE
                      </button>
                    </Box>
                  </Box>
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <BusinessCenterIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2013 - 2018</p>
                      <h6>
                        BACHELOR OF BUSINESS MANAGEMENT <br />{" "}
                        <span>-LAUREA UAS-FINLAND</span>
                      </h6>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="infoPage__left">
            <Box className="infoPage__left__container">
              <Box className="infoPage__left__imgContainer">
                <Box className="infoPage__left__profilePic"></Box>
                <h5>Dang Tuan Binh</h5>
                <span>Frontend developer</span>
              </Box>
              <Box className="infoPage__left__content">
                <Box className="infoPage__content__body">
                  <Box className="infoPage__content__text">
                    <Box className="infoPage__content__item">
                      <h6>Nationality:</h6>
                      <span>Vietnamese</span>
                    </Box>
                    <Box className="infoPage__content__item">
                      <h6>City:</h6>
                      <span>Helsinki</span>
                    </Box>
                    <Box className="infoPage__content__item">
                      <h6>Freelancer:</h6>
                      <span>Available</span>
                    </Box>
                    <Box className="infoPage__content__item">
                      <h6>Language:</h6>
                      <span>Finnish/English</span>
                    </Box>
                  </Box>
                  <Box className="infoPage__content__skill">
                    <Box className="infoPage__skill__item">
                      <img src={html} alt="html" />
                      <h6>HTML5</h6>
                    </Box>
                    <Box className="infoPage__skill__item">
                      <img src={css} alt="css" />
                      <h6>CSS3</h6>
                    </Box>
                    <Box className="infoPage__skill__item">
                      <img src={js} alt="js" />
                      <h6>JAVASCRIPT</h6>
                    </Box>
                    <Box className="infoPage__skill__item react">
                      <img src={react} alt="react" />
                      <h6>REACT.JS</h6>
                    </Box>
                  </Box>
                  <Box className="infoPage__content__subSkill">
                    <Box className="infoPage__subSkill__item">
                      <DoneAllIcon />
                      <span>Bootstrap, SCSS, ES6</span>
                    </Box>
                    <Box className="infoPage__subSkill__item">
                      <DoneAllIcon />
                      <span>Redux, Context API</span>
                    </Box>
                    <Box className="infoPage__subSkill__item">
                      <DoneAllIcon />
                      <span>API, Firebase services</span>
                    </Box>
                    <Box className="infoPage__subSkill__item">
                      <DoneAllIcon />
                      <span>Github, Agile</span>
                    </Box>
                  </Box>
                </Box>

                <Box className="infoPage__content__footer">
                  <Box className="infoPage__footer__text">
                    <span>DOWNLOAD CV</span>
                    <GetAppIcon />
                  </Box>

                  <Box className="infoPage__icon">
                    <a
                      href="https://www.linkedin.com/in/tuan-binh-dang-54298910b/"
                      className="infoPage__link"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://github.com/dangtuanbinh"
                      className="infoPage__link"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      href="https://github.com/dangtuanbinh"
                      className="infoPage__link"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://github.com/dangtuanbinh"
                      className="infoPage__link"
                    >
                      <InstagramIcon />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InfoPage;
