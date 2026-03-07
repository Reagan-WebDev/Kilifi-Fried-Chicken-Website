import Hero from "../components/Hero";
import FeaturedDishes from "../components/FeaturedDishes";
import GalleryPreview from "../components/GalleryPreview";


function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <GalleryPreview />
    </div>
  );
}

export default Home;