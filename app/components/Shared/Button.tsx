"use client";
import React from "react";

type ButtonProps = {
  btnText: string;
  btnColor: string;
  textColor?: string;
  btnIcon?: React.ReactNode;
  hoverColor?: string;
};

export const Button = ({
  btnText,
  btnColor,
  textColor,
  btnIcon,
  hoverColor,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: btnColor,
        color: textColor ? textColor : "white",
      }}
      className={`h-12 w-fit rounded-3xl p-4 flex items-center gap-2 font-semibold`}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = hoverColor || btnColor)
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = btnColor)}
    >
      {btnIcon ? btnIcon : null}
      {btnText}
    </button>
  );
};
