type TitleProps = {
  text: string;
  textColor?: string;
  textSize?: number;
};

function Title({ text, textColor, textSize }: TitleProps) {
  return (
    <h2
      style={{ color: textColor, fontSize: textSize }}
      className="text-textColor-default text-[36px] font-semibold"
    >
      {text}
    </h2>
  );
}

export default Title;
