import Hero from "../components/Hero";
import FeaturedDishes from "../components/FeaturedDishes";
import GalleryPreview from "../components/GalleryPreview";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";


function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <GalleryPreview />
      <AboutSection />
      <Testimonials />

    </div>
  );
}

export default Home;