import React from "react";

type ButtonProps = {
  btnText: string;
  btnColor: string;
  textColor?: string;
  btnIcon?: React.ReactNode;
};

export const Button = ({
  btnText,
  btnColor,
  textColor,
  btnIcon,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: btnColor,
        color: textColor ? textColor : "white",
      }}
      className={`h-12 w-fit rounded-3xl p-4 flex items-center gap-2 font-semibold`}
    >
      {btnIcon ? btnIcon : null}
      {btnText}
    </button>
  );
};
