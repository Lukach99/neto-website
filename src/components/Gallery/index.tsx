import "./index.scss";
import GalleryGrid from "./GalleryGrid";
import { useCallback, useContext, useEffect, useState } from "react";
import { LangContext } from "../../context/langContext";

const DATABASE_BASE_URL =
  "http://neto-website-default-rtdb.europe-west1.firebasedatabase.app/";

const choicesList = [
  { hr: "Kuhinja", eng: "Kitchen" },
  { hr: "Ormari", eng: "Closets" },
  { hr: "Spavaće sobe", eng: "Bedrooms" },
  { hr: "Ostalo", eng: "Others" },
];

const Gallery = () => {
  const [galleryType, setGalleryType] = useState("kuhinja");
  const [imagesList, setImagesList] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const { lang, setLang } = useContext(LangContext);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(
        `${DATABASE_BASE_URL}images/${galleryType}.json`
      );
      const data = await response.json();

      if (data === null) {
        throw new Error("Sorry, server not working.");
      } else {
        setImagesList(Object.values(data));
        setError(false);
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(true);
    }
  }, [galleryType]);

  const galleryTypeHandler = (type: string) => {
    setGalleryType(type);
  };

  useEffect(() => {
    fetchImages();
  }, [galleryType]);

  console.log(error);

  return (
    <div className="gallery">
      <h2 className="gallery-title">
        {lang === "hr" ? "Naši radovi" : "Our work"}
      </h2>
      <div className="gallery-choice">
        {choicesList.map((item: TChoice) => (
          <button
            key={item.hr}
            className={`gallery-choice-btn ${
              galleryType === item.hr.toLowerCase().split(" ").join("")
                ? "active-choice"
                : ""
            }`}
            onClick={galleryTypeHandler.bind(
              null,
              item.hr.toLowerCase().split(" ").join("")
            )}
          >
            {lang === "hr" ? item.hr : item.eng}
          </button>
        ))}
      </div>

      {isLoading && <div className="loading"></div>}

      {error && (
        <p className="error-message">
          Sorry! Service is not available right now. Please try again later!
        </p>
      )}
      {!error && <GalleryGrid imagesList={imagesList}></GalleryGrid>}
    </div>
  );
};

type TChoice = {
  hr: string;
  eng: string;
};

export default Gallery;
