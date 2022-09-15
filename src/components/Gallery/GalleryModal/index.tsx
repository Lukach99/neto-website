import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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

  const modal = (
    <div className="modal-container " onClick={closeModal}>
      <p className="modal-container-imgCounter">{`${imageIndexActive + 1} / ${
        imageList.length
      }`}</p>
      <button className="modal-container-closeBtn" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <div
        className={`modal ${animationClasses}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-container-btn" onClick={imageLeftHandler}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className="modal-display">
          <img src={imageList[imageIndexActive]} alt="" />
        </div>
        <button className="modal-container-btn" onClick={imageRightHandler}>
          <FontAwesomeIcon icon={faAngleRight} />
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
