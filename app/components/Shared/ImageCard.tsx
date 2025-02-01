import Image from "next/image";
import React from "react";

type ImageCardProps = {
  imageUrl: string;
  subtitle?: string;
  title?: string;
  titleSize?: number;
  imageHeight?: number;
  titlePosition?: string;
};

function ImageCard({
  imageUrl,
  subtitle,
  title,
  titleSize,
  imageHeight,
  titlePosition,
}: ImageCardProps) {
  return (
    <div
      className="relative w-full h-[333px] hover:cursor-pointer"
      style={{ height: imageHeight }}
    >
      <Image
        src={imageUrl}
        alt="explore section"
        fill
        className="object-cover rounded-3xl"
      />
      <div
        className="absolute w-full h-full bg-black/40 hover:bg-black/50 rounded-3xl flex flex-col justify-end items-center px-5 py-6"
        style={{ justifyContent: titlePosition }}
      >
        {subtitle && <h5 className="text-white text-base">{subtitle}</h5>}
        <h2
          className="text-white text-[28px] font-semibold"
          style={{ fontSize: titleSize }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default ImageCard;
