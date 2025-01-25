import "AllProducts.css";
import NavbarImg from "components/common/Navbar";
import { useState, useEffect } from "react";
import { getProduct } from "services/AxiosClient";
import { Product } from "type";
import Heading from "@assets/fabric-ahsan.png";
import Footer from "components/common/Footer";
import { useNavigate } from "react-router-dom";
import { unavailableImg } from "lib/data";

export function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Limit per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProduct();
        setProducts(product);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProduct();
  }, []);

  const handleCardClick = (storeID: string) => {
    navigate(`/product/${storeID}`);
  };

  // Get the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <NavbarImg />

      {/* Hero Section */}
      <div className="relative px-5 mt-24 mx-12">
        <img
          src={Heading}
          alt=""
          className="w-full object-cover h-48 md:h-60 rounded-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-5 items-center justify-center mx-5 rounded-3xl">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            AHSAN TRUSTMARK
          </p>
          <span className="text-white text-sm md:text-base lg:text-base font-medium">
            AHSAN Trustmark: Global Excellence in Curation and Creation
          </span>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12 mx-12">
        <h1 className="px-5 text-darkBlue font-semibold text-2xl md:text-3xl">
          Certified Products
        </h1>

        <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 pb-12 px-5 cursor-pointer">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 flex flex-col items-center bg-white shadow-xl rounded-2xl hover:shadow-lg transition"
              onClick={() => handleCardClick(product.id)}
            >
              {/* Product Image */}
              <img
                className="w-full h-40 md:h-48 object-cover rounded-2xl mt-2"
                src={product.images[0]?.image_url || unavailableImg}
                alt={product.name || "Product Name"}
              />
              {/* Product Info */}
              <div className="pt-3 flex flex-col items-center w-full">
                <p className="text-sm md:text-base text-darkBlue font-medium text-center">
                  {product.name || "Product Name"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`py-1 px-4 rounded-2xl ${
                  currentPage === index + 1
                    ? "bg-darkBlue text-white"
                    : "bg-gray-200 text-darkBlue"
                } hover:bg-darkBlue hover:text-white transition`}
              >
              </button>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
