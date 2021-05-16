import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useFormik } from "formik";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./index.css";
import * as emailjs from "emailjs-com";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "*";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "*";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "*";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "*";
  } else if (values.message.length < 0) {
    errors.message = "Write some message";
  }
  return errors;
};
const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const sendMessage = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: formik.values.email,
      to_name: "service_f033bjl",
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      message_html: formik.values.message,
    };
    emailjs.init("user_aocuVaTMNlqsNT7z3Y5Qu");
    emailjs
      .send(
        "service_f033bjl",
        "template_u7rp3t1",
        templateParams,
        "user_aocuVaTMNlqsNT7z3Y5Qu"
      )
      .then(() => {
        alert("Message send successfully");
      });
    formik.resetForm();
  };

  return (
    <>
      <Box className="contactPage">
        <Box className="contactPage__top">
          <Box className="contactPage__layer"></Box>
        </Box>

        <Box className="contactPage__down">
          <Box className="contactPage__form__container">
            <form onSubmit={formik.handleSubmit} className="contactPage__form">
              <Box className="contactPage__form__title">
                <h3>Get in touch</h3>
              </Box>

              <Box className="contactPage__form__top">
                {formik.errors.firstName ? (
                  <div className="contactPage__form__validate">
                    {formik.errors.firstName}
                  </div>
                ) : null}
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="First Name"
                />
                {formik.errors.firstName ? (
                  <div className="contactPage__form__validate">
                    {formik.errors.firstName}
                  </div>
                ) : null}
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="Last Name"
                />
              </Box>
              {formik.errors.email ? (
                <div className="contactPage__form__validate">
                  {formik.errors.email}
                </div>
              ) : null}
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Your Email"
                className="contactPage__form__email"
              />
              {formik.errors.message ? (
                <div className="contactPage__form__validate">
                  {formik.errors.message}
                </div>
              ) : null}
              <input
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Your Message"
                className="contactPage__form__message"
              />
            </form>
            <button type="submit" onClick={sendMessage}>
              Send
            </button>
          </Box>

          <Box className="contactPage__info">
            <h3>Contact information</h3>
            <Box className="contactPage__info__item">
              <MailOutlineIcon />
              <span>tuanbinh.35@gmail.com</span>
            </Box>
            <Box className="contactPage__info__item">
              <PhoneIphoneIcon />
              <span>+358 468 870 694</span>
            </Box>
            <Box className="contactPage__info__icon">
              <Box className="contactPage__icon__container">
                <a
                  href="https://www.linkedin.com/in/tuan-binh-dang-54298910b/"
                  className="contactPage__icon"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/dangtuanbinh"
                  className="contactPage__icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://facebook.com/dang.robin.1"
                  className="contactPage__icon"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://https://www.instagram.com/dtbsauvage/"
                  className="contactPage__icon"
                >
                  <InstagramIcon />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
