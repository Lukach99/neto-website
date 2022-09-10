import { Fragment, useState } from "react";
import GalleryModal from "../GalleryModal";
import "./index.scss";

const picture_one =
  "https://dupqmgrdwnev6.cloudfront.net/wp-content/uploads/2021/02/KUHINJE-PO-MJERI-PRIMA-Julija-siva-930x581.jpg?x92893";
const picture_two =
  "https://www.namjestaj.info/wp-content/uploads/2019/06/base-slide-ormar-1.jpg";
const pictures = [
  picture_one,
  picture_two,
  picture_one,
  picture_one,
  picture_two,
  picture_one,
];

const GalleryGrid = ({ imagesList }: Props) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const modalHandler = (index: number) => {
    console.log("clicked");
    setIsModalActive(true);
    setImageIndex(index);
  };

  return (
    <>
      <div className="galleryGrid">
        {imagesList.map((item: string, i) => (
          <img
            key={i}
            src={item}
            alt=""
            className="galleryGrid-img"
            onClick={modalHandler.bind(null, i)}
          />
        ))}
      </div>
      {isModalActive && (
        <GalleryModal
          modalHandler={setIsModalActive}
          imageIndex={imageIndex}
          imageList={imagesList}
        />
      )}
    </>
  );
};

type Props = {
  imagesList: string[];
};

export default GalleryGrid;
