import React from "react";

type ButtonProps = {
  btnText: string;
  btnColor: string;
  textColor?: string;
};

export const Button = ({ btnText, btnColor, textColor }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: btnColor,
        color: textColor ? textColor : "white",
      }}
      className={`h-12 w-fit rounded-3xl p-4 flex items-center font-semibold`}
    >
      {btnText}
    </button>
  );
};
