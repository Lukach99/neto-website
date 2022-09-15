import "./index.scss";

const WorkInfo = ({ title, imgSrc, description }: Props) => {
  return (
    <div className="service">
      <div className="service-name">
        <img className="service-name-img" src={imgSrc} alt="" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

type Props = {
  title: string;
  imgSrc: string;
  description: string;
};

export default WorkInfo;
