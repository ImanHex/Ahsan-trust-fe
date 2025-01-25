import { useState, useEffect } from "react";
import { getNewsData } from "services/AxiosClient";
import { News } from "type";
import { FaClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const AhsanTrustNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsData();
        // Sort the news by date in descending order (latest first)
        const sortedNews = data.sort((a: News, b: News) => {
          const dateA = new Date(a.Date).getTime();
          const dateB = new Date(b.Date).getTime();
          return dateB - dateA;
        });
        setNews(sortedNews);
        console.log(sortedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const formatDateTime = (isoString: string) => {
      return format(new Date(isoString), "MMMM dd, yyyy, h:mm a");
    };

  return (
    <section className="mt-36">
    <div className="text-start px-4 lg:text-center">
      <p className="text-titleBlue font-medium leading-4 text-sm">
        AHSAN Trustmark News & Events
      </p>
      <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
        Find out more about <br /> our activity and events
      </h1>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mt-10 px-6 lg:px-24">
      <div className="flex flex-col gap-10">
        {news.slice(0, 3).map((newsItem, index) => (
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5 news-child-block"
            key={index}
          >
            <div className="news-image-block w-full sm:w-32 flex-shrink-0">
              <img
                src={newsItem.image}
                alt="image"
                onClick={() => handleCardClick(newsItem.id)}
                className="cursor-pointer w-full sm:w-32 h-auto rounded-lg"
              />
            </div>
            <div className="news-info-block flex flex-col items-start w-full">
              <h3
                className="font-medium text-lg leading-8 text-darkBlue hover:text-blue-600 hover:cursor-pointer"
                onClick={() => handleCardClick(newsItem.id)}
              >
                {newsItem.name}
              </h3>

              <div className="flex items-center gap-3 mt-1">
                <FaClock className="text-2xl text-lightGrey" />
                <span className="text-sm leading-6 font-normal text-lightGrey">
                {formatDateTime(newsItem.Date)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {news.length > 0 && (
        <div className="rightNews-block hidden lg:block w-full lg:w-1/2 flex-col gap-4">
          <div className="rightNews-block-image-container">
            <img
              src={news[0].image}
              alt="news"
              onClick={() => handleCardClick(news[0].id)}
              className="cursor-pointer w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="rightNews-block-body">
            <h1
              className="font font-medium text-2xl text-darkBlue hover:text-blue-600 hover:cursor-pointer"
              onClick={() => handleCardClick(news[0].id)}
            >
              {news[0].name}
            </h1>
            <p className="text-sm font-normal leading-6 text-darkGrey mt-2">
              {news[0].details}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <FaClock className="text-2xl text-lightGrey" />
              <span className="text-sm leading-6 font-normal text-lightGrey">
              {formatDateTime(news[0].Date)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>

  );
};

export default AhsanTrustNews;
