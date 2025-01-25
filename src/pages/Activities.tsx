import { useEffect, useState } from "react";
import activityPoster from "@assets/activity-poster.jpg";
import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar";
import QASection from "components/shared/QASection";
import { getActivityData } from "services/AxiosClient";
import { ActivityData } from "type";
import Loading from "components/common/loading";
import ErrorPage from "components/common/ErrorPage";

const ActivityPage = () => {
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const activitiesPerPage = 1; // Number of activities per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActivityData();
        setActivities(data);
      } catch (err) {
        setError("Failed to fetch activity data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate current activities for the page
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <ErrorPage errorMessage={error}/>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        {currentActivities.map((activity, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2">
                <img
                  src={activity.image || activityPoster}
                  alt={`Activity Poster ${index + 1}`}
                  className="rounded-lg shadow-md object-cover w-full"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-darkBlue mb-4">
                  {activity.title || "Activity Title"}
                </h1>
                <p className="text-gray-600 text-xs mb-4">
                  {activity.description || "Activity description goes here."}
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    <strong>Duration:</strong> {activity.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {activity.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {activity.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Register for the Event
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Ensure your participation by filling out the registration form.
                Seats are limited, so register now!
              </p>
              <a
                href={activity.register_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {Array.from(
            { length: Math.ceil(activities.length / activitiesPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 "
                    : "bg-gray-200"
                }`}
              >
              </button>
            )
          )}
        </div>
      </div>
      <QASection />
      <Footer />
    </div>
  );
};

export default ActivityPage;
