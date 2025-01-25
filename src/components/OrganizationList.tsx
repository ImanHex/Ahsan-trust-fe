import { useEffect, useState } from "react";
import { AhsanOrganization } from "../lib/data";
import { fetchImageUrl } from "../config/firebaseUtils";

const AhsanTeam = () => {
  const [teamImages, setTeamImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls: { [key: string]: string } = {};
      for (const member of AhsanOrganization) {
        try {
          const url = await fetchImageUrl(member.image);
          imageUrls[member.image] = url; // Use the image path as the key
        } catch (error) {
          console.error(`Error fetching image for ${member.name}:`, error);
          imageUrls[member.image] = "https://via.placeholder.com/150"; // Fallback to a placeholder
        }
      }
      setTeamImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <div className="mt-12 px-4">
      {/* Heading Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkBlue">
          Meet the AHSAN Team
        </h2>
        <p className="text-sm md:text-base text-gray-600 pt-2">
          Dedicated professionals driving the vision of the AHSAN Trustmark.
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {AhsanOrganization.map((member) => (
          <div
            key={member.name}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center w-64 min-w-64"
          >
            {/* Display fetched image */}
            {teamImages[member.image] ? (
              <img
                src={teamImages[member.image]}
                alt={member.name}
                className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover mb-4 shadow-lg"
              />
            ) : (
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gray-200 animate-pulse mb-4"></div> // Placeholder while loading
            )}

            <h3 className="font-semibold text-sm text-gray-800 truncate">
              {member.name}
            </h3>
            <p className="text-xs pt-2 text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AhsanTeam;
