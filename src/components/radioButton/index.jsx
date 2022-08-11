import React,{useState} from "react";
import styled from "styled-components";

export default function RadioButton ({props}){
    const [active, setActive] = useState(false);
    function handleClick() {
      if (active) {
        setActive(false);
      } else {
        setActive(true);
      }
    }

    if (props.type === "square") {
        return (
          <FirstRadioButton
            className={active ? "active" : ""}
            onClick={handleClick}
          >
            <div className="checkbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </div>
            <span className="circle"></span>
            <p className="content">{props.label}</p>
          </FirstRadioButton>
        );
      } else {
        return (
          <SecondRadioButton
            className={active ? "active" : ""}
            onClick={handleClick}
          >
            <div className="checkbox"></div>
            <p className="content">{props.label}</p>
          </SecondRadioButton>
        );
      }

}


//radio button styled
const FirstRadioButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  .checkbox {
    border: 1px solid #6e6d6d;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    display: flex;
    svg {
      margin: auto;
    }
  }
  .circle {
    display: none;
  }
  .content {
    color: #6e6d6d;
    font-size: 27px;
    font-family: YekanBakh;
    margin: 0;
    font-weight: 300;
    transition: color 0.6s;
  }
  &.active {
    .checkbox {
      background: #ff4d4d;
      border-color: #ff4d4d;
      z-index: 10;
    }
    .circle {
      display: block;
      position: absolute;
      width: 39px;
      height: 39px;
      border-radius: 39px;
      background-color: #f5f5f5;
      right: -9px;
    }
    .content {
      color: #ff4d4d;
      font-weight: 500;
    }
  }
`;

const SecondRadioButton = styled(FirstRadioButton)`
  .content {
    font-size: 24px;
    color: #000000;
  }
  .checkbox {
    border: 1px solid #000000;
    width: 23px;
    height: 23px;
    border-radius: 23px;
    display: flex;
  }
  &.active {
    .checkbox {
      background: inherit;
      position: relative;
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ff4d4d;
        width: 11px;
        height: 11px;
        border-radius: 11px;
      }
    }
  }
`;