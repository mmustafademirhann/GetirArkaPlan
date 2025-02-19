import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // 🚀 Framer Motion kütüphanesi

const BoxContainer = styled(motion.div)`
  margin: 15px 0;
  border-radius: 10px;
  background-color: rgb(207, 207, 207);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;`
;

const TopBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  text-align: left;
  border-radius: 10px 10px 0 0;
  background-color: #3498db;
  color: white;
  font-size: 15px;
  font-weight: bold;
  user-select: none;`
;

const Arrow = styled(motion.span)`
  font-size: 16px;`
;

const BottomBox = styled(motion.div)`
  background-color: #e74c3c;
  color: white;
  font-size: 16px;
  text-align: center;
  border-radius: 0 0 10px 10px;
  overflow: hidden;`
;

const ContentWrapper = styled.div`
  padding: 15px;`
;

const Box = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const boxRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(contentRef.current.scrollHeight);
      setTimeout(() => {
        boxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150); // 150ms bekleyerek animasyon başladıktan sonra scroll yap
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <BoxContainer
      ref={boxRef}
      whileHover={{ scale: 1.02 }} // 🚀 Hover efekti
      transition={{ type: "spring", stiffness: 300 }}
    >
      <TopBox
        onClick={onToggle}
        whileHover={{ backgroundColor: "#2980b9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }} // 🚀 Hover animasyonu
        transition={{ duration: 0.3 }}
      >
        <h3>{question}</h3>
        <Arrow animate={{ rotate: isOpen ? 180 : 0 }}>▼</Arrow> {/* 🚀 Ok animasyonu */}
      </TopBox>
      <BottomBox
        ref={contentRef}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? maxHeight : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ContentWrapper>{answer}</ContentWrapper>
      </BottomBox>
    </BoxContainer>
  );
};

export default Box;