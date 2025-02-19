import React from "react";

const BottomBox = ({ answer, isActive, onClick }) => {
  return (
    <div className={`bottom-box ${isActive ? "active" : ""}`} onClick={onClick}>
      <p>{answer}</p>
    </div>
  );
};

export default BottomBox;
