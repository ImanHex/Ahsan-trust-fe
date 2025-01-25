import { unavailableImg } from "lib/data";
import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, getProductById } from "services/AxiosClient";
import { Product } from "type";

export function ProductFooter() {
  const [products, setProduct] = useState<Product | null>(null);
  const [productCard, setProductCard] = useState<Product[]>([]);
  const { id } = useParams<{ id: string }>();
  const [visibleCount, setVisibleCount] = useState(5); // Number of visible products
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getProductById(id!);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchStores();
  }, [id]);

  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getProduct();
        setProductCard(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);

  // Adjust the number of visible products based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setVisibleCount(2); // Small screens
      } else if (screenWidth < 1024) {
        setVisibleCount(4); // Medium screens
      } else {
        setVisibleCount(6); // Large screens
      }
    };

    updateVisibleCount(); // Initial call
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth / visibleCount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth / visibleCount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 justify-center w-full my-3 p-10">
      {/* Desktop Navigation Buttons */}
      <div className="hidden md:flex items-center gap-3 justify-center w-full">
        {/* Left Navigation Button */}
        <button
          className="py-3 px-5 rounded-3xl hover:bg-gray-300 text-darkBlue transition"
          onClick={handleScrollLeft}
        >
          <FaChevronLeft />
        </button>

        {/* Product Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-scroll scrollbar-hide whitespace-nowrap"
          >
            {productCard.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 cursor-pointer bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow w-48"
                onClick={() => handleCardClick(product.id)}
              >
                {/* Responsive Product Image */}
                <img
                  src={product.images[0]?.image_url || unavailableImg}
                  alt={product.name}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-2xl"
                />
                {/* Responsive Product Name */}
                <p className="text-xs sm:text-sm lg:text-base text-center p-2 font-medium text-darkBlue truncate">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          className="py-3 px-5 rounded-2xl hover:bg-gray-300 text-darkBlue transition"
          onClick={handleScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Small Screen Horizontal Scrolling */}
      {products && (
        <div className="block md:hidden w-full h-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 w-max px-4">
            {productCard.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 cursor-pointer bg-blue-50 p-3 sm:p-4 rounded-2xl shadow-md"
                onClick={() => handleCardClick(product.id)}
                style={{ width: `calc(100% / ${visibleCount})` }} // Responsive card width
              >
                {/* Responsive Product Image */}
                <img
                  src={product.images[0]?.image_url || unavailableImg}
                  alt={product.name}
                  className="w-full h-28 sm:h-36 lg:h-40 object-cover rounded-2xl"
                />
                {/* Responsive Product Name */}
                <p className="text-xs sm:text-sm lg:text-base text-center p-2 font-medium text-darkBlue truncate">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
