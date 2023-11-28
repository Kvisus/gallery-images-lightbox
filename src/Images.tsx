import { FC } from "react";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;
  const handleClickImage = (index: number) => {
    onClick(index);
  };
  return (
    <div className="images-container">
      {data.map((slide, idx) => (
        <div onClick={() => handleClickImage(idx)} key={idx} className="image">
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
  );
};
export default Images;
