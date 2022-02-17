import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import BlockOne from "assets/svgs/0.svg";
import BlockTwo from "assets/svgs/8.svg";
import BlockThree from "assets/svgs/7.svg";
import BlockFour from "assets/svgs/4.svg";
import BlockFive from "assets/svgs/3.svg";

// ------ define styled components ------ //

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

// page container
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
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 104%);
`;

// left side items
const LeftColumn = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-tight: 20%;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.2rem;
    font-size: 2.5rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4.8rem;
    line-height: 1.1em;
    font-weight: bold;
    font-size: 84px;
    text-shadow: 3px 4px rgb(194, 79, 79);
  }
`;

// scalable vector graphic
const SVG = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 150px;
  border: 10px solid rgba(255, 255, 255);
  padding: 2rem;
`;

// right side items
const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative;
  align-items: center;
  ${SVG}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${SVG}:nth-child(2) {
    top: 170px;
    right: 5px;
  }
  ${SVG}:nth-child(3) {
    top: 450px;
    left: 50px;
  }
  ${SVG}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
  ${SVG}:nth-child(5) {
    bottom: 80px;
    right: 375px;
  }
`;

// Home page functional component
const Home = () => {
  // fade in effect
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <LeftColumn className="mr-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            AlgoLab
            <i className="fas fa-atom"></i>
          </motion.p>

          {/* button group */}
          <div className="">
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
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                </span>
                <span>Register</span>
              </Btn>
            </Link>
          </div>
        </LeftColumn>

        <RightColumn className="ml-6">
          <SVG
            src={BlockOne}
            alt="icon1"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: -250, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />

          <SVG
            src={BlockTwo}
            alt="icon2"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 50, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <SVG
            src={BlockThree}
            alt="icon3"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <SVG
            src={BlockFour}
            alt="icon4"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: -50, right: 80, top: -150, bottom: 70 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />

          <SVG
            src={BlockFive}
            alt="icon5"
            whileTap={{ scale: 0.4 }}
            drag={true}
            dragConstraints={{ top: -25, right: 125, bottom: 50, left: -125 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </RightColumn>
      </Container>
    </Section>
  );
};

export default withRouter(Home);
