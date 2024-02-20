import React from "react";

const sizeClasses = {
  txtNunitoSemiBold16Gray90001: "font-nunito font-semibold",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtNunitoRegular14WhiteA700: "font-normal font-nunito",
  txtNunitoBold32: "font-bold font-nunito",
  txtNunitoSemiBold14: "font-nunito font-semibold",
  txtNunitoSemiBold24: "font-nunito font-semibold",
  txtNunitoBold36: "font-bold font-nunito",
  txtNunitoBold14: "font-bold font-nunito",
  txtNunitoRegular14: "font-normal font-nunito",
  txtNunitoRegular10Black900: "font-normal font-nunito",
  txtNunitoRegular16: "font-normal font-nunito",
  txtNunitoRegular14Gray900: "font-normal font-nunito",
  txtNunitoSemiBold14Gray900: "font-nunito font-semibold",
  txtNunitoSemiBold14Gray600: "font-nunito font-semibold",
  txtNunitoSemiBold16Gray900: "font-nunito font-semibold",
  txtNunitoRegular10: "font-normal font-nunito",
  txtNunitoSemiBold14Purple600: "font-nunito font-semibold",
  txtNunitoSemiBold10: "font-nunito font-semibold",
  txtNunitoRegular14Purple600: "font-normal font-nunito",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
