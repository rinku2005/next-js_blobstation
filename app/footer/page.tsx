import React from "react";

import styles from "../styles/style.module.css";
import { Col, Row } from "antd";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer_wrapper}>
        <div className={styles.container}>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12  }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
            >
              <img className={styles.img_fluid} src="images/footer-logo.png" />
              <h2>
                We develop software solutions by working closely with clients to
                understand business needs. Innovative solutions built with
                client's vision and our technical expertise empower the
                businesses in modern digital world.
              </h2>
              <ul className={styles.icon}>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
            >
              <h4>Quick Links </h4>
              <ul>
                <li>
                  <a href="#"> Home</a>
                </li>
                <li>
                  <a href="#"> About Us </a>
                </li>
                <li>
                  <a href="#"> Career</a>
                </li>
                <li>
                  <a href="#"> Blog</a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
            >
              <h4>Services </h4>
              <ul>
                <li>
                  <a href="#"> Development</a>
                </li>
                <li>
                  <a href="#"> Design </a>
                </li>
                <li>
                  <a href="#"> Staff</a>
                </li>
                <li>
                  <a href="#"> Augmentation</a>
                </li>
                <li>
                  <a href="#"> Cloud & DevOps</a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span:24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
            >
            <div>
              <div className={styles.footer_main}>
                <div className={styles.footer_left}>
                  <img
                    className={styles.img_icon}
                    src="images/footer-ion.png"
                  />
                </div>
                <div className={styles.footer_rigt}>
                  <h1> Ahmedabad Office</h1>
                  <p>
                    505 Satyamev Elite, Near Vakil Saheb Bridge, Ambli Bopal T
                    Junction, Bopal, Ahmedabad 380058
                  </p>
                  <a href="#">Email : contact@blobstation.com</a>
                  <p>Phone : +91 99741 91122</p>
                </div>
              </div>
              <div className={styles.footer_main}>
                <div className={styles.footer_left}>
                  <img
                    className={styles.img_icon}
                    src="images/footer-ion.png"
                  />
                </div>
                <div className={styles.footer_rigt}>
                  <h1> Montreal Office</h1>
                  <p>
                    2020 rte Transcanadienne, suite #107, Dorval, Quebec,
                    CanadaH9P 2N4
                  </p>
                  <a href="#">Email : contact@blobstation.com</a>
                  <p>Phone : +1 514-710-3481</p>
                </div>
              </div>
            </div>
            </Col>
          </Row>
          <div className={styles.copy_right}>
            <p>
              {" "}
              <span>Ⓒ Blobstation Inc. 2023 - All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
