import React, { useState } from "react";
import { Spinner } from ".";

const ImageLoader: React.FC<{ src: string }> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false); // In case of an error, we still want to hide the loader.
  };

  return (
    <div>
      {isLoading && <Spinner />}
      <img
        src={src}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        style={{ display: isLoading ? "none" : "block" }}
        alt="Image"
      />
    </div>
  );
};

export default ImageLoader;
