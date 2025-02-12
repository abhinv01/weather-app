/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Vanilla = ({ dat }) => {
  const date = new Date(dat);

  if (isNaN(date.getTime())) {
    const d = new Date();
    return <p>{d.toDateString()}</p>;
  }

  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const dayIndex = date.getDay();
  //   const dayName = daysOfWeek[dayIndex];

  return (
    <>
      <p>{date.toDateString()}</p>
    </>
  );
};

export default Vanilla;
