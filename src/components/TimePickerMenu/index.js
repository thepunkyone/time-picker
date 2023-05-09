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
}) => {
  return (
    <div className={className} id={id}>
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
  );
};

TimePickerMenu.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  onSelectHours: PropTypes.func.isRequired,
  onSelectMinutes: PropTypes.func.isRequired,
};

export default TimePickerMenu;
