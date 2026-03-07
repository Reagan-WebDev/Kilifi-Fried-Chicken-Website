import Hero from "../components/Hero";
import FeaturedDishes from "../components/FeaturedDishes";
import GalleryPreview from "../components/GalleryPreview";
import AboutSection from "../components/AboutSection";


function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <GalleryPreview />
      <AboutSection />
      
    </div>
  );
}

export default Home;