import React from "react";

interface NewsUpdateCardProps {
  title: string;
  description: string;
  date: string;
  srcUrl: string;
}

const NewsUpdateCard: React.FC<NewsUpdateCardProps> = ({
  title,
  description,
  date,
  srcUrl,
}) => {
  return (
    <div className="w-full h-auto pb-10 lg:py-4 mb-8 lg:my-3 leading-[1.8rem] flex items-center justify-between border-b border-[#ddd]">
      <div className="w-[40%]">
        <img className="w-full h-[100px]" src={srcUrl} alt="news img" />
      </div>
      <div className="w-4" />
      <div className="w-[60%] h-[100px]">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-[gray]">{description}</p>
        <p className="text-[gray]">{date}</p>
      </div>
    </div>
  );
};

export default NewsUpdateCard;
