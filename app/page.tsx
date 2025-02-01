import CategorySection from "./components/CategorySection/CategorySection";
import ExploreSection from "./components/ExploreSection/ExploreSection";

export default function Home() {
  return (
    <div className="px-2 py-3">
      <ExploreSection />
      <CategorySection />
    </div>
  );
}
