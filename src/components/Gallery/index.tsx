import "./index.scss";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Naši radovi</h2>
      <h3>Kuhinje</h3>
      <GalleryGrid></GalleryGrid>
    </div>
  );
};

export default Gallery;
