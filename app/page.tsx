import CategorySection from "./components/CategorySection/CategorySection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import ImageGridSection from "./components/ImageGridSection/ImageGridSection";
import PopularIdeas from "./components/PopularIdeas/PopularIdeas";

export default function Home() {
  return (
    <div className="px-2 py-3">
      <ExploreSection />
      <CategorySection />
      <PopularIdeas />
      <ImageGridSection />
    </div>
  );
}
