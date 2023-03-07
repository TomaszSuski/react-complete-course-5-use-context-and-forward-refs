import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

export default function Input({
  className,
  isValid,
  label,
  type,
  id,
  value,
  onChange,
  onBlur,
}) {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  isValid: PropTypes.bool,
  labelFor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  className: null,
  isValid: null,
  label: null,
  type: null,
  id: null,
  value: null,
  onChange: null,
  onBlur: null,
};
