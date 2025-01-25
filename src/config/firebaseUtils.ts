import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../config/FirebaseConfig";

/**
 * Fetches the download URL for a given Firebase storage path.
 * @param filePath - Path to the file in Firebase storage
 * @returns Promise<string> - The download URL
 */
export const fetchImageUrl = async (filePath: string): Promise<string> => {
  try {
    console.log(`Fetching image from path: ${filePath}`);
    const fileRef = ref(storage, filePath);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error(`Error fetching image at ${filePath}:`, error);
    throw error;
  }
};

