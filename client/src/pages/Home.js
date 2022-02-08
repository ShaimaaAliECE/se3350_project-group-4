import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanetOne from "assets/svgs/green-alg.svg";
import PlanetTwo from "assets/svgs/green-alg.svg";
import PlanetThree from "assets/svgs/green-alg.svg";
import PlanetFour from "assets/svgs/green-alg.svg";

// buttons with motion
const Btn = styled(motion.div)`
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border: 2px solid rgb(64, 223, 159);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: rgb(64, 223, 159);
  margin-bottom: 1rem;
  width: 350px;
  text-align: center;
`;


const Container = styled.div`
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  display: grid;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

// background
const Section = styled.section`
  justify-content: center;
  align-items: center;
  height: 100hv;
  display: flex;
  background: rgb(30, 28, 28);
`;

// left side items
const LeftColumn = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

// scalable vector graphic
const SVG = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

// right side items
const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${SVG}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${SVG}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${SVG}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${SVG}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Home = () => {
  // fade in effect
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <LeftColumn>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to 3350 Game 
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Journey to the unknown
          </motion.p>

          {/* button group */}
          <Link to="/login">
            <Btn
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(64,223,159)",
                border: "none",
                color: "#000",
              }}
              whileTap={{
                scale: 0.95,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              <span className="icon mr-2">
                <i className="fas fa-user-circle"></i>
              </span>
              <span>Login</span>
            </Btn>
          </Link>

          <Link to="/register">
            <Btn
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(64,223,159)",
                border: "none",
                color: "#000",
              }}
              whileTap={{
                scale: 0.95,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              <span className="icon mr-2">
                <i className="fas fa-user-circle"></i>
              </span>
              <span>Register</span>
            </Btn>
          </Link>
        </LeftColumn>
        <RightColumn>
          <SVG
            src={PlanetOne}
            alt="icon1"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <SVG
            src={PlanetTwo}
            alt="icon2"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <SVG
            src={PlanetThree}
            alt="icon3"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <SVG
            src={PlanetFour}
            alt="icon4"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </RightColumn>
      </Container>
    </Section>
  );
};

export default withRouter(Home);
