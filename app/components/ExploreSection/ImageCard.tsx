import Image from "next/image";
import React from "react";

type ImageCardProps = {
  imageUrl: string;
  subtitle?: string;
  title?: string;
};

function ImageCard({ imageUrl, subtitle, title }: ImageCardProps) {
  return (
    <div className="relative w-full h-[333px]">
      <Image
        src={imageUrl}
        alt="explore section"
        fill
        className="object-cover rounded-3xl"
      />
      <div className="absolute w-full h-full bg-black/40 rounded-3xl flex flex-col justify-end items-center px-5 py-6">
        <h5 className="text-white text-base">{subtitle}</h5>
        <h2 className="text-white text-[28px] font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default ImageCard;
