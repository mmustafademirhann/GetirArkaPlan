// TopBox.jsx
import React from "react";
import styled from "styled-components";

const StyledTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-align: left;
  border-radius: 10px 10px 0 0;
  background-color: #3498db;
  color: white;
  font-size: 18px;
  font-weight: bold;
  user-select: none;

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const TopBox = ({ question, onClick }) => {
  return (
    <StyledTopBox onClick={onClick}>
      <h3>{question}</h3>
    </StyledTopBox>
  );
};

export default TopBox;
