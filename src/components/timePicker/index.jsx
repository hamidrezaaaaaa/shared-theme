import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function TimeInput({ props }) {
  const currentTime = new Date();

  return (
    <InputTime>
      <DatePicker
        disableDayPicker
        format="HH:mm"
        plugins={[<TimePicker hideSeconds />]}
        arrow={false}
        calendar={persian}
        locale={persian_fa}
        calendarPosition={"top"}
        value={!props.defaultValue ? parseInt(props.defaultValue) : currentTime}
      />
      <FontAwesomeIcon icon={faClock} />
    </InputTime>
  );
}

const InputTime = styled.div`
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-left: 1px solid #ff4d4d;
    width: 1px;
    height: 19px;
    top: 19%;
    right: 19%;
  }

  .rmdp-container {
    .rmdp-input {
      max-width: 164px !important;
      border: 1px solid #ff4d4d;
      color: #ff4d4d;
      font-size: 20px;
      font-family: "YekanBakh";
      padding: 4px 15px 0px;
    }
    div {
      div {
        .rmdp-shadow {
          width: 194px;
          box-shadow: none;
          border: 1px solid #ff4d4d;
          border-bottom: none;
          border-radius: 6px 6px 0 0;
          transform: translateY(5px);
        }
        div {
          .rmdp-time-picker {
            width: 194px;
            min-width: 194px;
            height: 90px;
            position: relative;
            &:after {
              content: "";
              display: block;
              position: absolute;
              width: 88%;
              border-bottom: 1px solid #e4e4e4;
              bottom: 9%;
            }
            div {
              position: relative;
              input[name="hour"] {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 9%;
                color: #04165d;
                font-size: 20px;
                font-family: "YekanBakh";
              }

              input[name="minute"] {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 76%;
                color: #04165d;
                font-size: 20px;
                font-family: "YekanBakh";
              }

              .rmdp-arrow-container.rmdp-up {
                position: relative;
                top: 12px;
                left: -7px;
                &:after {
                  content: "";
                  display: block;
                  position: absolute;
                  width: 32px;
                  height: 60px;
                  border-radius: 16px;
                  border: 1px solid #37b3b8;
                  top: -6px;
                }
                &:before {
                  content: "";
                  display: block;
                  position: absolute;
                  width: 20px;
                  border-bottom: 1px solid #37b3b8;
                  top: 25px;
                }
              }

              span {
                .rmdp-arrow {
                  border-color: #ff4d4d;
                }
              }

              .rmdp-arrow-container.rmdp-down {
                position: relative;
                top: 24px;
                left: -7px;
              }
              .rmdp-arrow-container:hover {
                background-color: inherit;
                box-shadow: none;
              }
            }
          }

          .dvdr {
            color: #37b3b8;
          }
        }
      }
    }
  }

  svg {
    color: #ff4d4d;
    position: absolute;
    right: 7px;
    top: 7px;
  }
`;
