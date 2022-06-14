import React from "react";
import"./Button.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const VARIANT = ["outline", "text"];

const SIZES = ["sm", "md", "lg"];

const STYLES = ["default", "primary", "secondary", "danger"];



const Button = (props) => {
  const { variant, startIcon = '', endIcon = '', size, color, disableShadow, disabled } =
    props;
  const checkButtonVariant = VARIANT.includes(variant) ? ("btn--" + variant) : "";
  const checkButtonStartIcon = (startIcon !== "" ? "btn--startIcon" : "");
  const checkButtonEndIcon = (endIcon !== "" ? "btn--endIcon" : "");
  const checkButtonSize = SIZES.includes(size) ? ("btn--" + size) : "";
  const checkButtonColor = STYLES.includes(color) ? "btn--" + color : "btn--default";
  const checkButtonDisableShadow = disableShadow != null ? "btn--disableShadow" : "";
  const checkButtonDisabled = disabled != null ? true : false;

  return <button
      type="button"
      className={`btn ${checkButtonColor} ${checkButtonSize} ${checkButtonVariant} ${checkButtonDisableShadow} ${checkButtonStartIcon} ${checkButtonEndIcon}`}
      disabled={checkButtonDisabled}
    >
      {checkButtonStartIcon !== "" && (
        <span>
          <BsFillCartPlusFill/>
        </span>
      )}
      Default
      {checkButtonEndIcon !== "" && (
        <span>
          <BsFillCartPlusFill/>
        </span>
      )}
    </button>
  ;
};

export default Button;
