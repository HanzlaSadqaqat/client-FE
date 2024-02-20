import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  outline: { gray_400_4c: "border border-gray-400_4c border-solid" },
  fill: {
    purple_600_19: "bg-purple-600_19",
    gray_200_b2: "bg-gray-200_b2 text-gray-600",
    blue_gray_50: "bg-blue_gray-50 text-gray-900",
    purple_600: "bg-purple-600 text-white-A700",
    purple_700: "bg-purple-700 text-white-A700",
    gray_200: "bg-gray-200",
  },
};
const sizes = { xs: "py-px", sm: "p-[3px]", md: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""} items-center`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_400_4c",
    "purple_600_19",
    "gray_200_b2",
    "blue_gray_50",
    "purple_600",
  ]),
};

export { Button };
