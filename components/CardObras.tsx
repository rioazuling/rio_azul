import Image, {StaticImageData} from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imageSRC: StaticImageData;
  videoSRC: string;
}

const CardObras: React.FC<Props> = ({title, description, imageSRC, videoSRC}) => {
  return (
    <div className="flex flex-col sm:m-4 w-full">
      <div className="flex flex-col gap-4 sm:flex-row items-center">
        <Image alt={title} className="h-64 w-64 rounded-md" src={imageSRC} />
        <div className="w-full">
          <iframe
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-64 aspect-video"
            src={videoSRC}
            title="YouTube video player"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col">
        <h1 className="font-bold text-blue-50 text-lg pb-1 capitalize dark:text-blue-50">
          {title}
        </h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardObras;
