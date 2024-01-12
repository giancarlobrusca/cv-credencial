"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

export default function Home() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]);
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]);

  const handleMouseMove = (event) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <Main onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <CardWrapper style={{ rotateX, rotateY }} transition={{ velocity: 0 }}>
        <Card style={{ cardRotateX, cardRotateY }} />
      </CardWrapper>
    </Main>
  );
}

const Main = styled(motion.main)`
  perspective: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const CardWrapper = styled(motion.div)`
  margin: auto;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  width: 554px;
  height: 268px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0.5);
  background: url(./frente.jpg);
  display: flex;
  transform-style: preserve-3d;
  boxshadow: 0px 0px 30px -7px rgba(0, 0, 0, 0.45);
  perspective: 800px;
`;
