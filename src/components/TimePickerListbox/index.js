import React from "react";
import PropTypes from "prop-types";

const TimePickerListbox = ({ label, times, selectedTime, onChange }) => {
  const labelId = `${label}-description`;

  return (
    <>
      <span id={labelId}>{label}</span>
      <ul role="listbox" aria-labelledby={labelId}>
        {times.map((time) => (
          <li
            key={time.value}
            role="option"
            aria-selected={time.value === selectedTime}
            onClick={() => onChange(time)}
          >
            {time.label}
          </li>
        ))}
      </ul>
    </>
  );
};

TimePickerListbox.propTypes = {
  label: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedTime: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePickerListbox;
