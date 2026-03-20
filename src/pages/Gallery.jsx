import "../styles/gallery.css";

import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";

function Gallery() {
  return (
    <section className="gallery-page">

      <div className="gallery-header">
        <h1>Our Gallery</h1>
      </div>

      <div className="gallery-grid">

        <div className="gallery-item large">
          <img src={img1} alt="food" loading="lazy" />
        </div>

        <div className="gallery-item">
          <img src={img2} alt="restaurant" loading="lazy" />
        </div>

        <div className="gallery-item tall">
          <img src={img3} alt="drink" loading="lazy" />
        </div>

        <div className="gallery-item">
          <img src={img4} alt="interior" loading="lazy" />
        </div>

        <div className="gallery-item">
          <img src={img5} alt="food plating" loading="lazy" />
        </div>

        <div className="gallery-item">
          <img src={img6} alt="chef" loading="lazy" />
        </div>

      </div>

    </section>
  );
}

export default Gallery;