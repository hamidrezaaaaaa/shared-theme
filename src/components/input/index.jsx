import React from "react";
import styled from "styled-components";

export default function Input({ props }) {
  return <CustomInput type={props.type}  value={props.defaultValue ? props.defaultValue : ""}/>;
}

const CustomInput = styled.input`
  border: 1px solid #ff4d4d;
  border-radius: 6px;
  padding: 7px;
  min-width: 290px;
  outline: none;
`;
