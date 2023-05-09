import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import hoursOptions from "@/components/TimePickerMenu/times/hours";
import minutesOptions from "@/components/TimePickerMenu/times/minutes";

import TimePickerListbox from "@/components/TimePickerListbox";

import styles from "./styles.module.css";

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
    <div className={classNames(styles.menu, className)} id={id}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <div className={styles.lists}>
        <TimePickerListbox
          className={styles.list}
          times={hoursOptions}
          selectedTime={hours}
          onChange={onSelectHours}
          label="Hours"
        />
        <TimePickerListbox
          className={styles.list}
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
