import {useState} from "react";
import { CDBDatePicker, CDBContainer } from "cdbreact";

const DatePicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CDBContainer>
        <CDBDatePicker onChange={onChange} value={value} color="dark" />
    </CDBContainer>
  );
};

export default DatePicker;