import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import HomeIcon from "../../Components/HomeIcon/index";
import CodeIcon from "@material-ui/icons/Code";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

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
                      <span>Implementing websites under requirement of Cybersoft academy</span>
                    </Box>
                  </Box>
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <LocalMallIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2019 - 2020</p>
                      <h6>
                        OPERATION MANAGER <br /> <span>-F-BOX PALVELUVARSTOT OY</span>
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
                        OPERATION MANAGER  <br /> <span>-DL TRANSPORTS</span>
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
                        CUSTOMER SERVICE MANAGER <br /> <span>-DL TRANSPORTS</span>
                      </h6>
                      <span>Implementing websites under requirement of Cybersoft academy</span>
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
                       ADVANCED FRONTEND TRAINING <br /> <span>-CYBERSOFT ACADEMY</span>
                      </h6>
                      <button className="infoPage__education__button">CERTIFICATE</button>
                    </Box>
                  </Box>
                  <Box className="infoPage__right__item">
                    <Box className="infoPage__right__item--icon">
                      <BusinessCenterIcon />
                    </Box>
                    <Box className="infoPage__right__item--text">
                      <p>2013 - 2018</p>
                      <h6>
                        BACHELOR OF BUSINESS MANAGEMENT <br /> <span>-LAUREA UAS-FINLAND</span>
                      </h6>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="infoPage__left">
            <h5>PERSONAL INFOS</h5>
            <Box className="infoPage__left__container">
              <Box className="infoPage__left__imgContainer">
                <Box className="infoPage__left__profilePic"></Box>
              </Box>
              <Box className="infoPage__left__text">
                <Box className="infoPage__text__left">
                  <Box className="infoPage__text__item">
                    <h5>First Name :</h5>
                    <span>Tuan Binh</span>
                  </Box>
                  <Box className="infoPage__text__item">
                    <h5>Last Name :</h5>
                    <span>Dang</span>
                  </Box>
                  <Box className="infoPage__text__item">
                    <h5>Nationality :</h5>
                    <span>Vietnamese</span>
                  </Box>
                  <Box className="infoPage__text__item">
                    <h5>Freelance :</h5>
                    <span>Available</span>
                  </Box>
                </Box>
                <Box className="infoPage__text__right">
                  <Box className="infoPage__text__item">
                    <h5>Phone :</h5>
                    <span>+358 468 870 694</span>
                  </Box>
                  <Box className="infoPage__text__item">
                    <h5>Email :</h5>
                    <span>tuanbinh.35@gmail.com</span>
                  </Box>
                  <Box className="infoPage__text__item">
                    <h5>Location :</h5>
                    <span>Finland</span>
                  </Box>
                  <Box className="infoPage__text__item">
                    <h5>Languages :</h5>
                    <span>Finnish(Basic), English</span>
                  </Box>
                </Box>
              </Box>
            </Box>
            <button>DOWNLOAD CV</button>
            <Box className="infoPage__icon">
              <HomeIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InfoPage;
