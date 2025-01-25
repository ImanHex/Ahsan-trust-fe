import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStoreById } from "services/AxiosClient";
import NavbarImg from "components/common/Navbar";
import Footer from "components/common/Footer";
import Loading from "components/common/loading";
import fabricAhsan from "@assets/fabric-ahsan.png";
import type { Product, Store } from "type";
import { TbHomeHand } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { unavailableImg } from "lib/data";

export function Store() {
  const [store, setStore] = useState<Store | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 16; // 4 rows x 4 columns

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchStoreAndProducts = async () => {
      try {
        const storeData = await getStoreById(id!);
        setStore(storeData);
        setProducts(storeData.products);
        setFilteredProducts(storeData.products);
      } catch (error) {
        console.error("Error fetching store or products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStoreAndProducts();
  }, [id]);

  if (loading || !products || !store) {
    return <Loading />;
  }

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.categories.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleCardClick = (storeID: string) => {
    navigate(`/product/${storeID}`);
  };

  return (
    <div>
      <NavbarImg />

      {/* Header Section */}
      <div className="relative px-4 lg:px-10 mt-24 mx-4 py-5">
        <img
          src={fabricAhsan}
          className="w-full h-72 md:h-72 object-cover rounded-xl shadow-lg"
          alt="Fabric Background"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 p-6 rounded-xl mx-2">
          <div className="flex-shrink-0">
            <img
              src={store?.logo}
              alt={store?.name}
              className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          <div className="text-center lg:text-left text-white">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-blue-50">
              {store?.name}
            </h1>
            <p className="text-blue-200 text-sm md:text-base mt-2">
              Your trusted store for high-quality fabrics and more.
            </p>
            <div className="mt-4 space-y-2 grid grid-cols-2">
              <a href={store?.location} className="hover:text-blue-400 transition">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <TbHomeHand size={24} />
                  <span className="font-medium">Address</span>
                </div>
              </a>
              <a href={store?.facebook} className="hover:text-blue-400 transition">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MdFacebook size={24} />
                  <span className="font-medium">Facebook</span>
                </div>
              </a>
              <a href={store?.instagram} className="hover:text-blue-400 transition">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <IoLogoInstagram size={24} />
                  <span className="font-medium">Instagram</span>
                </div>
              </a>
              <div className="flex items-center justify-center lg:justify-start gap-2 hover:text-blue-500">
                <FiPhone size={24} />
                <a href={`tel:${store?.phone || ""}`}>{store?.phone || "Unavailable"}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mt-5 px-9 flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by product name or category..."
            className="w-full px-10 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <GoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-9">
        {currentProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No products found.
          </p>
        ) : (
          currentProducts.map((product) => (
            <div
              key={product.id}
              className="product-card border bg-white p-4 rounded-3xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => handleCardClick(product.id)}
            >
              <img
                src={product.images[0]?.image_url || unavailableImg}
                alt={product.name}
                className="h-48 w-full object-cover rounded-3xl mb-4"
              />
              <h2 className="font-semibold text-center text-sm text-gray-800">
                {product.name}
              </h2>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePagination(i + 1)}
            className={`px-4 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            } hover:bg-blue-700 hover:text-white transition`}
          >
          </button>
        ))}
      </div>

      <Footer />
    </div>
  );
}
