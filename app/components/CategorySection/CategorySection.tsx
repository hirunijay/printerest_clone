import React from "react";
import Title from "../Shared/Title";
import ImageCard from "../Shared/ImageCard";
import categories from "../../data/categories.json";
import { Button } from "../Shared/Button";

function CategorySection() {
  return (
    <div className="mx-11 mt-16">
      <Title text="Browse by category" textSize={28} />
      <div className="grid grid-cols-5 gap-4 mt-4">
        {categories?.categories?.map((item, index) => (
          <ImageCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.name}
            titleSize={20}
            imageHeight={118}
            titlePosition="center"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button
          btnColor="#E9E9E9"
          textColor="#111111"
          btnText="See more"
          hoverColor="#00000026"
        />
      </div>
    </div>
  );
}

export default CategorySection;
