import React from "react";
import styles from "../styles/style.module.css";
import { Col, Row } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";


const Tailored = () => {
  return (
    <>
      <div className={styles.model_wrapper}>
        <div className={styles.container}>
          <div className={styles.model_main}>
            <div className={styles.model_left}>
              <>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                      <img
                        className={styles.img_fluid}
                        src="/images/tailored.svg"
                      
                      />
                      <h3>Staff Augmentation</h3>
                      <p>
                        We provides additional resources to supplement your
                        existing team. It gives you specific skills or expertise
                        required for scale.
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                      <img
                        className={styles.img_fluid}
                        src="images/model2.svg"
                      />
                      <h3>Dedicated Team </h3>
                      <p>
                        You get dedicated team of software professionals working
                        exclusively on their project. It allows you to scale the
                        team up or down as needed.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                      <img
                        className={styles.img_fluid}
                        src="images/model3.svg"
                      />
                      <h3>Fixed Cost </h3>
                      <p>
                        You get dedicated team of software professionals working
                        exclusively on their project. It allows you to scale the
                        team up or down as needed.
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                      <img
                        className={styles.img_fluid}
                        src="images/model4.svg"
                      />
                      <h3>Time & Material</h3>
                      <p>
                        Pay for time and resources spent on the project. It
                        offers flexibility and is suitable for projects with
                        evolving requirements.
                      </p>
                    </div>
                  </Col>
                </Row>
              </>
            </div>
            <div className={styles.model_right}>
              <>
                <h2>
                  Tailored to your needs, Our{" "}
                  <span>Flexible Engagement Model </span>ensuring seamless
                  collaboration and successful outcomes.
                </h2>
                <p>
                  Choose the engagement model that aligns with your project
                  goals, budget, and desired level of involvement. Take a
                  decision on factors such as project complexity, timeline,
                  scope, and desired level of control.
                </p>
                <button className={styles.read_btn2}>
                  {" "}
                  Read more
                  <AiOutlineArrowRight />
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tailored;
