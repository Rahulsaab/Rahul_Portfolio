import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="abt-icon.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Rahul Patel</strong>. I am a MERN stack
              developer and Web designer. I hold a B.Tech in Computer Science and Engineering (CSE) and i am from Mohali, Punjab.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              With a strong foundation in both front-end and back-end
              development, I am adept at creating dynamic, responsive websites
              and applications. My problem-solving skills enable me to tackle
              complex coding challenges efficiently, while my decision-making
              abilities help me navigate project complexities with ease. I
              thrive in collaborative environments, working effectively within
              teams to deliver high-quality solutions. I remain calm and
              productive under pressure, ensuring that deadlines are met without
              compromising on the quality of my work.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I thrive in collaborative environments, working effectively within
              teams, and I believe in sharing knowledge with each other for
              better outcomes.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
