import React from "react";
import Title from "../Shared/Title";
import ImageCard from "../Shared/ImageCard";
import { Button } from "../Shared/Button";

function ExploreSection() {
  return (
    <div className="mx-11 mt-8">
      <Title text="Explore the best of Pinterest" />
      <div className="flex flex-row gap-4 mt-8">
        <ImageCard
          imageUrl="https://i.pinimg.com/736x/46/28/83/462883e9bba880a77c86dea158aeb8e5.jpg"
          subtitle="You got this"
          title="Positive quotes and mantras"
        />
        <ImageCard
          imageUrl="https://i.pinimg.com/736x/70/20/84/7020842da9636ee6101cb698a3b0e353.jpg"
          subtitle="Nail heart"
          title="Valentine's Day manis"
        />
        <ImageCard
          imageUrl="https://i.pinimg.com/736x/18/ca/43/18ca43cab42b76c16ecc351d4f80a9a5.jpg"
          subtitle="Effortless eats"
          title="Quick and easy dinner ideas"
        />
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

export default ExploreSection;
