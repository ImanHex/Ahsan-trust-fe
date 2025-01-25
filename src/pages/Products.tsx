import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { categoryFilters, unavailableImg } from "../lib/data";
import { getProduct, getStoreById } from "../services/AxiosClient";
import type { Product, Store } from "../type";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]); // Products as an array
  const [stores, setStores] = useState<{ [key: string]: Store | null }>({}); // Stores mapped by product ID
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductsAndStores = async () => {
      try {
        const productData = await getProduct();
        const shuffledProducts = shuffleArray(productData); // Shuffle products
        setProducts(shuffledProducts);
  
        const storePromises = productData.map(async (product: Product) => {
          if (product.store) {
            const storeData = await getStoreById(product.store);
            return { [product.id]: storeData };
          }
          return { [product.id]: null };
        });
  
        const storeResults = await Promise.all(storePromises);
        const storeMap = storeResults.reduce((acc, storeObj) => {
          return { ...acc, ...storeObj };
        }, {});
  
        setStores(storeMap);
        console.log("Products", shuffledProducts);
        console.log("Stores", storeMap);
      } catch (error) {
        console.error("Error fetching products or stores:", error);
      }
    };
  
    fetchProductsAndStores();
  }, []);
  
  const shuffleArray = (array: Product[]) => {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ sortKey, ...item }) => item);
  };
  

  const handleCardClick = (storeID: string) => {
    navigate(`/product/${storeID}`);
  };

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, products.length - 4) : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - 4 ? 0 : prevIndex + 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <section className="mt-36">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-12 px-10">
    {/* Heading Section */}
    <div className="flex flex-col items-start">
      <p className="text-titleBlue font-medium leading-4 text-sm">
        Our Recommendation
      </p>
      <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
        Products
      </h1>
    </div>

    {/* Categories Centered */}
    <div className="flex justify-center items-center gap-3 flex-wrap">
      {categoryFilters.map((category, index) => (
        <div
          className="flex items-center gap-2 text-lightGrey py-2 px-4 md:px-5 rounded-3xl grey-border"
          key={index}
        >
          <category.icon className="text-lightGrey" />
          <a className="">{category.categoryName}</a>
        </div>
      ))}
    </div>

    {/* Slide Buttons */}
    <div className="flex gap-3">
      <button
        onClick={slideLeft}
        className="bg-bgGrey py-3 px-5 rounded-3xl"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={slideRight}
        className="bg-darkBlue py-3 px-5 rounded-3xl text-white"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>

  {/* Card Container */}
  <div className="card-container m-8 flex gap-6 overflow-x-auto scrollbar-hide">
    {visibleProducts.map((product) => (
      <div className="card" key={product.id}>
        <div
          className="card cursor-pointer"
          onClick={() => handleCardClick(product.id)}
        >
          <div className="card-img">
            <img
              src={product.images[0]?.image_url || unavailableImg}
              alt={product.name}
              className="w-full"
            />
          </div>
          <div className="card-description mt-5">
            <h3 className="text-normalBlackText cursor-pointer text-base md:text-lg">
              {product.name}
            </h3>
            <p className="text-normalGreyText">{product.categories}</p>

            {stores[product.id] && (
              <span className="flex gap-2 items-center mt-3">
                <img
                  src={stores[product.id]?.logo}
                  alt={stores[product.id]?.name}
                  className="w-7 rounded-full border border-gray-200"
                />
                <h4 className="text-xs">{stores[product.id]?.name}</h4>
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Product;
