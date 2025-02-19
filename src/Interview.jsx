// Interview.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
import questions from "./questions";

const InterviewContainer = styled.div`
  width: 600px;
  margin-bottom:300px
`;

const Interview = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 

  return (
    <InterviewContainer>
      {questions.map((q, index) => (
        <Box
          key={index}
          question={q.question}
          answer={
            typeof q.answer === "function" ? <q.answer isOpen={activeIndex === index} /> : q.answer
          }
          isOpen={activeIndex === index}
          onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </InterviewContainer>
  );
};

export default Interview;
