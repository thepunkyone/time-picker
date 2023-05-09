import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import classNames from "classnames";

import TimePickerMenu from "@/components/TimePickerMenu";

import styles from "./styles.module.css";

const initialState = {
  hours: { value: null, label: "HH" },
  minutes: { value: null, label: "MM" },
};

const TimePicker = ({ dateAndTime, onChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(initialState);

  const toggleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
        onClick={toggleMenuOpen}
        data-testid="open-menu-button"
      >
        {time.hours.label}:{time.minutes.label}
      </button>
      <TimePickerMenu
        className={classNames(styles.menu, { [styles.menuOpen]: menuOpen })}
        aria-labelledby="label"
        id="menu"
        hours={time.hours.value}
        minutes={time.minutes.value}
        onSelectHours={handleSelectHours}
        onSelectMinutes={handleSelectMinutes}
        onClose={closeMenu}
      />
    </div>
  );
};

TimePicker.propTypes = {
  dateAndTime: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
