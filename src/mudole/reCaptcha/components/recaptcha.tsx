import React, { useState, useRef } from "react";
import styled from "styled-components";

const Recaptcha = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 50 });
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setIsDragging(false);
    const targetRect = document
      .getElementById("target-zone")
      ?.getBoundingClientRect();
    const pieceRect = (e.target as HTMLElement).getBoundingClientRect();

    if (
      targetRect &&
      pieceRect.left >= targetRect.left - 10 &&
      pieceRect.left <= targetRect.left + 10
    ) {
      setIsVerified(true);
    }
  };

  return (
    <Container>
      <PuzzleArea onMouseMove={handleMouseMove}>
        <TargetZone id="target-zone" />
        <PuzzlePiece
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          isDragging={isDragging}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? "grabbing" : "grab",
            opacity: 1,
          }}
        />
      </PuzzleArea>
      {isVerified && <SuccessMessage>تایید شد!</SuccessMessage>}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  position: relative;
  user-select: none;
`;

const PuzzleArea = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f5f5f5;
`;

const TargetZone = styled.div`
  width: 50px;
  height: 50px;
  border: 2px dashed #666;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const PuzzlePiece = styled.div<{ isDragging: boolean }>`
  width: 50px;
  height: 50px;
  background: #2196f3;
  position: absolute;
  touch-action: none;
`;

const SuccessMessage = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: green;
`;

export default Recaptcha;
