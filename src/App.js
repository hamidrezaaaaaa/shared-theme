import Field from "./components";
import styled from "styled-components";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Option } from "./components/selectButton";

function App() {
  return (
    <CardRoot>
      <Card>
        <Field
          component={"text"}
          label={"بارگذاری گروهی"}
          color={"#E67205"}
          suffix={faUpload}
        />
        <Field
          component={"text"}
          label={"بازگشت"}
          color={"#E67205"}
          suffix={faAngleRight}
        />
        <Field component={"text"} label={"لغو"} color={"#37B3B8"} />
        <Field
          component={"text"}
          label={"تنظیم ساده‌تر"}
          color={"#E67205"}
          suffix={faAngleUp}
        />
        <Field
          component={"text"}
          label={"تنظیم تاریخ"}
          gradeint={"#FF8080 #FFD011"}
          hoverGradeint={"#FC2B2B #FFCD00"}
        />
        <Field
          component={"text"}
          label={"ثبت اطلاعات"}
          gradeint={"#71FBFF #37ABB8"}
          prefix={faCheck}
          hoverGradeint={"#71FBFF #2995A1"}
        />
      </Card>

      <Card>
        <Field component={"select"} defaultValue={2}>
          <Option value={1}>جدیدترین</Option>
          <Option value={2}>قدیمی‌ترین</Option>
          <Option value={3}>پرکابرترین</Option>
          <Option value={4}>کم‌کابرترین</Option>
        </Field>
      </Card>

      <Card>
        <Field
          component={"radioGroup"}
          label={"بازۀ فرجه"}
          color={"#FF4D4D"}
          type={"square"}
        />
      </Card>

      <Card>
        <Field
          component={"radioGroup"}
          label={"برای به‌روزکردن اطلاعات"}
          color={"#FF4D4D"}
          type={"circle"}
        />
      </Card>

      <Card>
        <Field component={"input"} type={"password"} defaultValue={""} />
      </Card>

      <Card style={{ paddingTop: "350px" }}>
        <Field component={"date"} type={"date"} defaultValue={""} />
      </Card>

      <Card style={{ paddingTop: "100px" }}>
        <Field component={"time"} type={"time"} defaultValue={"19:30"} />
      </Card>
    </CardRoot>
  );
}

export default App;

const CardRoot = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000080;
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 40px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
