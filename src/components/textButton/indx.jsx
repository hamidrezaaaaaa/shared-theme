import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextButton({ props }) {
  return (
    <TXButton
      color={props.color}
      gradeint={props.gradeint}
      text={props.label}
      hoverGradeint={props.hoverGradeint}
    >
      {props.prefix ? <FontAwesomeIcon icon={props.prefix} /> : ""}
      <p>{props.label}</p>
      {props.suffix ? <FontAwesomeIcon icon={props.suffix} /> : ""}
    </TXButton>
  );
}

// text button styled
const TXButton = styled.div`
  border: 1px solid ${(props) => (props.color ? props.color : "none")};
  border-radius: 20px;
  padding: ${(props) =>
    props.text === "لغو" ? "4px 70px 0px" : "4px 30px 0px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: fit-content;
  cursor: pointer;
  background: ${(props) =>
    props.gradeint
      ? `transparent linear-gradient(90deg, ${props.gradeint.slice(
          0,
          7
        )} 0%, ${props.gradeint.slice(8, 15)} 100%) 0% 0% no-repeat padding-box`
      : ""};

  &:hover {
    background: ${(props) =>
      props.hoverGradeint
        ? `transparent linear-gradient(90deg, ${props.hoverGradeint.slice(
            0,
            7
          )} 0%, ${props.hoverGradeint.slice(8, 15)} 100%) `
        : ""};
  }

  p {
    font-size: 24px;
    font-family: YekanBakh;
    color: ${(props) => (props.color ? props.color : "white")};
    margin: 0;
    font-weight: 500;
  }

  svg {
    color: ${(props) => (props.color ? props.color : "white")};
  }
`;
