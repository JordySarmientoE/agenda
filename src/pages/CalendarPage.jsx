import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
`;

const CalendarContainerLeft = styled.div`
  width: 30%;
  background-color: aliceblue;
`;

const CalendarContainerRight = styled.div`
  width: 60%;
`;

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarContainer>
      <CalendarContainerLeft>adsdas</CalendarContainerLeft>
      <CalendarContainerRight>
        <Calendar onChange={onChange} value={value}/>
      </CalendarContainerRight>
    </CalendarContainer>
  );
};

export default CalendarPage;
