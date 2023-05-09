import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import TimePickerMenu from "@/components/TimePickerMenu";

const initialState = {
  hours: { value: null, label: "HH" },
  minutes: { value: null, label: "MM" },
};

const TimePicker = ({ dateAndTime, onChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(initialState);

  const handleOnChange = (hours, minutes) => {
    const dateBase = dayjs(dateAndTime);

    const updatedDateWithTime = dateBase.hour(hours).minute(minutes);

    onChange(updatedDateWithTime.format());
  };

  const handleSelectHours = (hours) => {
    let minutes = time.minutes;

    if (minutes.value === initialState.minutes.value) {
      minutes = { value: 0, label: "00" };
    }

    setTime({
      hours,
      minutes,
    });

    handleOnChange(hours.value, minutes.value);
  };

  const handleSelectMinutes = (minutes) => {
    let hours = time.hours;

    if (hours.value === initialState.hours.value) {
      hours = { value: 0, label: "00" };
    }

    setTime({
      hours,
      minutes,
    });

    handleOnChange(hours.value, minutes.value);
  };

  return (
    <div>
      <span id="label">Select time</span>
      <button
        aria-labelledby="label"
        aria-controls="menu"
        aria-expanded={menuOpen}
      >
        {time.hours.label}:{time.minutes.label}
      </button>
      <TimePickerMenu
        aria-labelledby="label"
        id="menu"
        hours={time.hours.value}
        minutes={time.minutes.value}
        onSelectHours={handleSelectHours}
        onSelectMinutes={handleSelectMinutes}
      />
    </div>
  );
};

TimePicker.propTypes = {
  dateAndTime: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
