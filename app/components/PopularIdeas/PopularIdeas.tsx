import React from "react";
import { Button } from "../Shared/Button";
import { FaSearch } from "react-icons/fa";
import Title from "../Shared/Title";
import popular_ideas from "../../data/popular_ideas.json";

function PopularIdeas() {
  return (
    <div className="mx-11 mt-16">
      <Title text="Search for popular ideas" textSize={28} />
      <div className="flex flex-row flex-wrap gap-4 mt-4">
        {popular_ideas?.ideas.map((item, index) => (
          <Button
            key={index}
            btnText={item.name}
            btnColor="#E9E9E9"
            textColor="#211922"
            btnIcon={<FaSearch color="#767676" />}
            hoverColor="#00000026"
          />
        ))}
      </div>
    </div>
  );
}

export default PopularIdeas;
