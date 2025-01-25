import { unavailableImg } from "lib/data";
import { useEffect, useState } from "react";

const ProductGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5">
      {/* Main Image */}
      <div className="flex justify-center items-center">
        <img
          src={selectedImage || unavailableImg}
          alt="Selected"
          className="w-full md:w-96 h-64 md:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnails */}
      <div
        className="flex flex-row md:flex-col gap-2 overflow-x-scroll md:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 max-w-[calc(4*96px)] md:max-h-[calc(4*96px)]"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image || unavailableImg}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-md cursor-pointer border ${
              selectedImage === image ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
