import React from "react";
import styled from "styled-components";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";

export default function DateInput({ props }) {
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنچشنبه",
    "جمعه",
  ];
  let today = new Date();

  return (
    <PersianDatePicker>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={props.defaultValue ? props.defaultValue : today}
        render={<InputIcon />}
        weekDays={weekDays}
        arrow={false}
        calendarPosition={'top'}
      />
    </PersianDatePicker>
  );
}

//data input style
const PersianDatePicker = styled.div`
.rmdp-container {
    position: relative;
    &:after {
        content: "";
        display: block;
        position: absolute;
        border-left: 1px solid #ff4d4d;
        width: 1px;
        height: 19px;
        top: 27%;
        right: 7%;
      }
}

  div {
    div {
      
      & > .rmdp-input {
        width: 480px;
        border-color: #ff4d4d;
        border-radius: 6px;
        color: #ff4d4d;
        font-size: 22px;
        font-weight: 400;
        font-family: "YekanBakh";
        padding: 4px 20px;
        // background-color:#F5F5F5;
       
      }
      & > .rmdp-input:focus {
        background-color: inherit;
      }

      & > svg {
        left: 94% !important;
        color: #ff4d4d;
       
      }
    }

    & > .rmdp-shadow {
      box-shadow: none;
      width: 520px;
      border: 1px solid #ff4d4d;
      border-bottom: none;
      border-radius: 6px 6px 0 0;
      transform: translateY(6px);
    }

    .rmdp-calendar {
      width: 100%;
      .rmdp-header {
        direction: ltr;
        padding: 10px 30px;
        div {
          .rmdp-header-values {
            margin: 0;
            color: #ff4d4d;
            font-size: 30px;
            font-family: "YekanBakh";
            span:nth-child(2) {
              display: none;
            }
          }
          .rmdp-right {
            left: 80%;
            .rmdp-arrow {
              border-color: #344655;
            }
          }

          .rmdp-left {
            right: 8px;
            &:after {
              content: "";
              position: absolute;
              width: 86px;
              height: 32px;
              border-radius: 16px;
              border: 1px solid #ff4d4d;
              top: -7px;
              right: -10px;
            }
            &:before {
              content: "";
              position: absolute;
              border-left: 1px solid #ff4d4d;
              height: 11px;
              width: 1px;
              top: 50%;
              left: -14px;
              transform: translate(0, -50%);
            }
            .rmdp-arrow {
              border-color: #344655;
            }
          }
        }
      }
    }
    .rmdp-day-picker {
      div {
        width: 100%;
        .rmdp-week {
          .rmdp-week-day {
            color: #04165d;
            font-size: 17px;
            font-family: "YekanBakh";
          }
        }
      }
    }
  }

  .rmdp-arrow-container:hover {
    background-color: inherit;
  }

  .rmdp-selected span {
    width: 50%;
    margin: auto;
    border-radius: 6px;
  }
  .rmdp-day.rmdp-today span {
    width: 50%;
    margin: auto;
    border-radius: 6px;
  }

  .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
    width: 50%;
    margin: auto;
    border-radius: 6px;
  }
`;
