import React, { useEffect, useState } from "react";
import TextButton from "./textButton/indx";
import SelectButton from "./selectButton";
import RadioButton from "./radioButton";
import DateInput from "./datePicker";
import TimeInput from "./timePicker";
import Input from "./input";

export default function Field(props) {
  const component = props.component;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (component === "select") {
      setOptions([...options, props.children]);
    }
  }, []);

  //   generate origin component by components props
  function checkComponents() {
    if (component === "text") {
      return <TextButton props={props} />;
    } else if (component === "select") {
      return <SelectButton props={props} options={options} />;
    } else if (component === "radioGroup") {
      return <RadioButton props={props} />;
    } else if (component === "date") {
      return <DateInput props={props} />;
    } else if (component === "time") {
      return <TimeInput props={props} />;
    }else if (component === "input"){
      return <Input props={props} />
    }
  }

  return checkComponents();
}
