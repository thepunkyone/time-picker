import React from "react";
import PropTypes from "prop-types";

import hoursOptions from "@/components/TimePickerMenu/times/hours";
import minutesOptions from "@/components/TimePickerMenu/times/minutes";

import TimePickerListbox from "@/components/TimePickerListbox";

const TimePickerMenu = ({
  className,
  id,
  hours,
  minutes,
  onSelectHours,
  onSelectMinutes,
  onClose,
}) => {
  return (
    <div className={className} id={id}>
      <button onClick={onClose}>Close</button>
      <div>
        <TimePickerListbox
          times={hoursOptions}
          selectedTime={hours}
          onChange={onSelectHours}
          label="Hours"
        />
        <TimePickerListbox
          times={minutesOptions}
          selectedTime={minutes}
          onChange={onSelectMinutes}
          label="Minutes"
        />
      </div>
    </div>
  );
};

TimePickerMenu.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  onSelectHours: PropTypes.func.isRequired,
  onSelectMinutes: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TimePickerMenu;
