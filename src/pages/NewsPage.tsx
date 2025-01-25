import ErrorPage from "components/common/ErrorPage";
import Footer from "components/common/Footer";
import Loading from "components/common/loading";
import Navbar from "components/common/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNewsData } from "services/AxiosClient";
import { News } from "type";
import { format } from "date-fns";
import HeaderImg from '@assets/bg-about-us.png'

const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsData();
        setNews(data);
      } catch (err) {
        setError("Failed to fetch news data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  const handleCardClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  const formatDateTime = (isoString: string) => {
    return format(new Date(isoString), "MMMM dd, yyyy, h:mm a");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Modern Header */}
      <div
        className="relative text-white mx-14 mt-24 rounded-2xl overflow-hidden"
        style={{
          backgroundImage:`url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-6 py-14 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            AHSAN News
          </h1>
          <p className="text-lg font-medium text-gray-100 drop-shadow-sm">
            Stay updated with the latest news, events, and stories from AHSAN
            Trustmark.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentNews.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleCardClick(item.id)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-48 sm:h-36"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-darkBlue truncate mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {formatDateTime(item.Date)}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8">
            <nav className="inline-flex space-x-2">
              {Array.from(
                { length: Math.ceil(news.length / newsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`px-4 py-1 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsPage;
