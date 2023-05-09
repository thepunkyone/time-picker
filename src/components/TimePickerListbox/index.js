import React from "react";
import PropTypes from "prop-types";

const TimePickerListbox = ({
  className,
  label,
  times,
  selectedTime,
  onChange,
}) => {
  const labelId = `${label}-description`;

  return (
    <div className={className}>
      <span id={labelId}>{label}</span>
      <ul role="listbox" aria-labelledby={labelId}>
        {times.map((time) => (
          <li
            key={time.value}
            role="option"
            aria-selected={time.value === selectedTime}
            onClick={() => onChange(time)}
            tabIndex={time.value === selectedTime ? -1 : 0}
          >
            {time.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

TimePickerListbox.propTypes = {
  className: PropTypes.string,
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
