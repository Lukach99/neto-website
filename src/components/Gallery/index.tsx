import "./index.scss";
import GalleryGrid from "./GalleryGrid";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LangContext } from "../../context/langContext";

const DATABASE_BASE_URL =
  "http://neto-website-default-rtdb.europe-west1.firebasedatabase.app/";

const choicesList = [
  { hr: "Kuhinje", eng: "Kitchen" },
  { hr: "Ormari", eng: "Closets" },
  { hr: "Ostalo", eng: "Others" },
];

const Gallery = () => {
  const [galleryType, setGalleryType] = useState("kuhinje");
  const [imagesList, setImagesList] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const { lang, setLang } = useContext(LangContext);

  const imagesListMemo = useMemo(() => imagesList, [imagesList]);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(`${DATABASE_BASE_URL}images.json`);
      const data = await response.json();
      console.log("fetching");
      if (data === null) {
        throw new Error("Sorry, server not working.");
      } else {
        setImagesList(data);
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
  }, []);

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
      {!error && (
        <GalleryGrid
          imagesList={
            imagesListMemo === null
              ? []
              : Object.values(imagesListMemo[galleryType])
          }
        ></GalleryGrid>
      )}
    </div>
  );
};

type TChoice = {
  hr: string;
  eng: string;
};

export default Gallery;
