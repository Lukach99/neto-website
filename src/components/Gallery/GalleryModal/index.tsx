import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./index.scss";

const modalContainer: any = document.getElementById("overlay");

const GalleryModal = ({ modalHandler, imageIndex, imageList }: Props) => {
  const [imageIndexActive, setImageIndexActive] = useState(imageIndex);
  const [animationClasses, setAnimationClasses] = useState("popInAnimation");
  const closeModal = () => {
    setAnimationClasses("popOutAnimation");

    setTimeout(() => {
      modalHandler(false);
    }, 300);
  };

  const imageLeftHandler = (event: any) => {
    event.stopPropagation();
    if (imageIndexActive === 0) {
      setImageIndexActive(imageList.length - 1);
    } else {
      setImageIndexActive(imageIndexActive - 1);
    }
  };

  const imageRightHandler = (event: any) => {
    event.stopPropagation();
    if (imageIndexActive === imageList.length - 1) {
      setImageIndexActive(0);
    } else {
      setImageIndexActive(imageIndexActive + 1);
    }
  };

  /* useEffect(() => {
    setTimeout(() => {
      setImageIndexActive((state) => state + 1);
    }, 2000);
  }, [imageIndexActive]);
 */
  const modal = (
    <div className="modal-container " onClick={closeModal}>
      <p className="modal-container-imgCounter">{`${imageIndexActive + 1} / ${
        imageList.length
      }`}</p>
      <button className="modal-container-closeBtn" onClick={closeModal}>
        x
      </button>

      <div
        className={`modal ${animationClasses}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-container-btn" onClick={imageLeftHandler}>
          {"<"}
        </button>
        <div className="modal-display">
          <img src={imageList[imageIndexActive]} alt="" />
        </div>
        <button className="modal-container-btn" onClick={imageRightHandler}>
          {">"}
        </button>
      </div>
    </div>
  );

  return createPortal(modal, modalContainer);
};

type Props = {
  modalHandler: Function;
  imageIndex: number;
  imageList: string[];
};

export default GalleryModal;
