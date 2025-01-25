import Footer from "components/common/Footer";
import Loading from "components/common/loading";
import Navbar from "components/common/Navbar";
import { useState, useEffect } from "react";
import { getStoreData } from "services/AxiosClient";
import { Store } from "type";
import Heading from "@assets/bg-about-us.png";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const AllStoresPage = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12; // 4x4 grid for large screens

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStoreData();
        setStores(data);
        setFilteredStores(data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = stores.filter((store) =>
      store.name.toLowerCase().includes(searchValue)
    );
    setFilteredStores(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <Loading />;
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStores = filteredStores.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative px-5 mt-24 mx-10">
        <img
          src={Heading}
          alt="Ahsan Trustmark"
          className="w-full object-cover h-48 md:h-60 rounded-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center rounded-3xl">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            AHSAN TRUSTMARK
          </p>
          <span className="text-white text-sm md:text-base lg:text-lg font-medium">
            Global Excellence in Curation and Creation
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center py-12">
        <div className="relative w-3/4 lg:w-1/2">
          <input
            type="text"
            placeholder="Search stores..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-12 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-sm"
          />
          <GoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Stores Grid */}
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentStores.map((store) => (
            <div
              key={store.id}
              className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => navigate(`/store/${store.id}`)}
            >
              {/* Store Image */}
              <div className="flex justify-center items-center p-4">
                <img
                  src={store.logo}
                  alt={store.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>

              {/* Store Details */}
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold text-darkBlue truncate">
                  {store.name}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  {store.ActiveDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePagination(i + 1)}
              className={`px-4 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-blue-700 hover:text-white transition`}
            >
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllStoresPage;
