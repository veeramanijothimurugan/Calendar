import { useState } from "react";
import "./App.css";
import left from "./assets/left_next.png";
import right from "./assets/right_next.png";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
      );
    }
    return daysArray;
  };

  const handleMonth = (e) => {
    const month = e.target.value;
    setSelectedDate(new Date(selectedDate.getFullYear(), month, 1));
  };

  const handleYear = (e) => {
    const year = e.target.value;
    setSelectedDate(new Date(year, selectedDate.getMonth(), 1));
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getDay() === date2.getDay() &&
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <>
      <div className="calendar">
        <div className="header">
          <div className="btns">
            <button
              className="left"
              onClick={() => {
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() - 1
                  )
                );
              }}
            >
              <img src={left} />
            </button>
            <button
              className="right"
              onClick={() => {
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() + 1
                  )
                );
              }}
            >
              <img src={right} />
            </button>
          </div>
          <div className="middle">
            <select
              className="month"
              value={selectedDate.getMonth()}
              onChange={handleMonth}
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="year"
              value={selectedDate.getFullYear()}
              onChange={handleYear}
            >
              {Array.from(
                { length: 10 },
                (_, i) => selectedDate.getFullYear() - 5 + i
              ).map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <hr />
        <div className="weekdays">
          {days.map((day, index) => (
            <div className="day" key={index}>
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {dayInMonth().map((day, index) => (
            <div
              key={index}
              className={
                day
                  ? isSameDay(day, new Date())
                    ? "date current"
                    : "date"
                  : "empty"
              }
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
      <h5>Designed by <a href="https://github.com/veeramanijothimurugan">Veeramani</a></h5>
    </>
  );
}

export default App;
