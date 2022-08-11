import React, { useState } from "react";
import styled from "styled-components";

export default function SelectButton({ props,options }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(props.defaultValue);
  let getOptions = [];
  options.map((x) => {
    for (let i = 0; i < x.length; i++) {
      getOptions.push(x[i]);
    }
  });

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleText = (ev) => {
    setOption(ev.currentTarget.textContent);
  };

  const itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={handleText}
        className="dropdown__item"
        key={item.toString()}
      >
        {item}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };

  return (
    <DropDown className={open ? "active" : ""} onClick={handleClick}>
      <div className="dropdown__text">
        {typeof option === "string" ? option : getOptions[option - 1]}
        <span className="arrow"></span>
      </div>
      {itemList(getOptions)}
    </DropDown>
  );
}


// select component styled
export const Option = styled.div``;

const DropDown = styled.div`
  position: relative;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border: 1px solid #37b3b8;
  border-radius: 18px;
  padding: 2.5px 0 2.5px 0;

  .dropdown__text {
    color: #37b3b8;
    cursor: pointer;
    font-family: YekanBakh;
    font-size: 20px;
    text-align: end;
    position: relative;
    padding-right: 25px;
    padding-left: 10px;
    min-width: 160px;
  }

  .arrow {
    width: 20px;
    height: 10px;
    display: inline-block;
    position: absolute;
    margin-right: 35px;
    bottom: 5px;
    left: 4px;
    transition: 0.4s ease;
    margin-top: 2px;
    text-align: left;
    transform: rotate(45deg);
    float: left;
    &:before,
    &:after {
      position: absolute;
      content: "";
      display: inline-block;
      width: 12px;
      height: 2px;
      background-color: #37b3b8;
      transition: 0.4s ease;
    }
    &:after {
      position: absolute;
      transform: rotate(90deg);
      top: -5px;
      left: 5px;
    }
  }

  &.active {
    .arrow {
      transform: rotate(45deg) translate(-5px, -5px);
      &:before {
        transform: translate(10px, 0);
      }
      &:after {
        transform: rotate(90deg) translate(10px, 0);
      }
    }
  }

  .dropdown__items {
    position: relative;
    visibility: hidden;
    opacity: 0;
    max-height: 0px;
    transition: max-height 0.6s ease;
  }

  &.active {
    .dropdown__items {
      visibility: visible;
      height: auto;
      max-height: 290px;
      opacity: 1;
      transition: max-height 0.7s, opacity 3s, visibility 4s ease;
    }
  }

  .dropdown__item {
    cursor: pointer;
    padding-right: 25px;
    padding-left: 10px;
    color: #37b3b8;
    font-family: YekanBakh;
    font-size: 20px;
    text-align: end;
    border-top: 1px solid #ffffff;
    font-weight: 300;
  }
`;