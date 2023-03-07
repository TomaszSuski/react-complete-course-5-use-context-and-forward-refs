import React, { useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ className, isValid, label, type, id, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    const activate = () => {
      inputRef.current.focus();
    };

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        } ${className}`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;

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
