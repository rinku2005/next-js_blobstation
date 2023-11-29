import React from "react";
import { Col, Row } from "antd";
import styles from "../styles/style.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import images from "../../images/service1.png";


const OurServices = () => {
  return (
    <div className={styles.service_wrapper}>
      <div className={styles.container}>
        <div>
        <h2>Our Services </h2>
                <p>From custom software development to providing dedicated teams,<br/>
                    our team will help you achieve your goal</p>
        </div>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box1}>
              <div className={styles.service_content1}>
                <img src="/service1.png"/>
              {/* <images 
                src="/service1.png"
                width={400}
                height={376}
                alt="Picture of the author"/> */}
                <h1>Design</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box2}>
              <div className={styles.service_content1}>
                <h1>Development</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box3}>
              <div className={styles.service_content1}>
                <h1>Cloud & DevOps</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box4}>
              <div className={styles.service_content1}>
                <h1>Staff Augmentation</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>

          {/* <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box}>
              <Image
                src="/service1.png"
                width={400}
                height={376}
                alt="Picture of the author"
              />

              <img className={styles.img_fluid} src="/images/service1.png" />
              <div className={styles.service_content}>
                <h1>Design</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box}>
              <img className={styles.img_fluid} src="images/service2.png" />
              <div className={styles.service_content}>
                <h1>Development</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box}>
              <img className={styles.img_fluid} src="images/service3.png" />
              <div className={styles.service_content}>
                <h1>Cloud & DevOps</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={styles.service_box}>
              <img className={styles.img_fluid} src="images/service4.png" />
              <div className={styles.service_content}>
                <h1>Staff Augmentation</h1>
                <p>Upraise the user experience with elegant designs</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default OurServices;
