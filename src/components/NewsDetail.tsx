import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNewsById, getNewsData } from "services/AxiosClient";
import { News } from "type";
import NavbarImg from "./common/Navbar";
import Footer from "./common/Footer";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";
import { format } from "date-fns";

const NewsDetail = () => {
  const [news, setNews] = useState<News | null>(null);
  const [newsCard, setNewsCard] = useState<News[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const data = await getNewsById(id!);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news detail:", error);
      }
    };
    fetchNewsDetail();
  }, [id]);

  useEffect(() => {
    const fetchNewsCards = async () => {
      try {
        const data = await getNewsData();
        setNewsCard(data);
      } catch (error) {
        console.error("Error fetching news cards:", error);
      }
    };
    fetchNewsCards();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200, // Scroll amount based on card size
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, // Scroll amount based on card size
        behavior: "smooth",
      });
    }
  };

  const formatDateTime = (isoString: string) => {
    return format(new Date(isoString), "MMMM dd, yyyy, h:mm a");
  };

  if (!news)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-600 text-lg">News not found</p>
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavbarImg />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* News Details Section */}
        <div className="bg-white shadow-lg rounded-3xl p-4 mb-8 mt-20 mx-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* News Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={news.image}
                alt={news.name}
                className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* News Details */}
            <div>
              <h1 className="text-2xl font-bold text-darkBlue mb-2">
                {news.name}
              </h1>
              <div className="flex items-center text-gray-500 mb-4">
                <FaClock className="text-lg mr-2" />
                <span> {formatDateTime(news.Date)}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {news.details}
              </p>
              <p className="text-blue-800 text-xs leading-relaxed">
                #AhsanTrustmark #ahsantrustmark #trustworthyproducts
                #เครื่องหมายรับรองคุณภาพสินค้าท้องถิ่น
              </p>
            </div>
          </div>
        </div>

        {/* Related News Section */}
        <div className="rounded-3xl p-4 m-5">
          <h2 className="text-xl font-bold text-darkBlue mb-2">Related News</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={slideLeft}
              className="text-darkBlue hover:bg-gray-200 p-2 rounded-full"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Horizontal Scrollable News Section */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-scroll scrollbar-hide w-full"
            >
              {newsCard.map((news) => (
                <div
                  key={news.id}
                  className="flex-shrink-0 cursor-pointer bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => handleCardClick(news.id)}
                  style={{
                    width: "200px", // Fixed width
                    height: "250px", // Fixed height
                  }}
                >
                  {/* Image Container */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={news.image}
                      alt={news.name}
                      className="w-full h-32 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* News Title */}
                  <h3 className="text-sm font-semibold text-darkBlue mt-2 mb-1 truncate">
                    {news.name}
                  </h3>
                  {/* News Date */}
                  <p className="text-xs text-gray-500 truncate">
                    {formatDateTime(news.Date)}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={slideRight}
              className="text-darkBlue hover:bg-gray-200 p-2 rounded-full"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
