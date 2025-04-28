import { useEffect } from "react";

type TrailerProps = {
  trailerKey: string;
  onClose: () => void;
};

export const Trailer = ({ trailerKey, onClose }: TrailerProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="relative w-full md:w-3/4 lg:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
        >
          X
        </button>
        <iframe
          className="w-full h-64 md:h-80"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
