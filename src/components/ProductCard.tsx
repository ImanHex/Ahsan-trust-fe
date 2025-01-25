import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { HiMiniHome } from "react-icons/hi2";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getStoreById } from "services/AxiosClient";
import { Store, Product } from "type";
import Footer from "./common/Footer";
import Loading from "./common/loading";
import Navbar from "./common/Navbar";
import { ProductFooter } from "./common/ProductFooter";
import ProductGallery from "./shared/ProductGallery";
import SectionDisplay from "./shared/SectionDisplay";

const StoresCard = () => {
  const [store, setStore] = useState<Store | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductAndStore = async () => {
      try {
        const productData = await getProductById(id!);
        setProduct(productData);

        if (productData.store) {
          const storeData = await getStoreById(productData.store);
          setStore(storeData);
        }
      } catch (error) {
        console.error("Error fetching product or store:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndStore();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  const sections = [
    {
      title: "Values",
      items: product.values?.length ? product.values : ["No values available"],
    },
    {
      title: "Qualities",
      items: product.qualities?.length
        ? product.qualities
        : ["No qualities available"],
    },
    {
      title: "Ethics",
      items: product.ethics?.length ? product.ethics : ["No ethics available"],
    },
    {
      title: "Benefits",
      items: product.benefits?.length
        ? product.benefits
        : ["No benefits available"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-col items-center px-4 lg:px-10 mt-32">
        {/* Store Card */}
        <div className="store-card flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 bg-white rounded-2xl shadow-md w-full lg:max-w-6xl">
          {/* Product Image */}
          {product.images?.length ? (
            <div className="product-img flex justify-center items-center w-full lg:w-1/2 h-[18rem] md:h-[24rem]">
              <ProductGallery
                images={product.images.map((img) => img.image_url)}
              />
            </div>
          ) : (
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <p className="text-gray-500">No product images available.</p>
            </div>
          )}

          {/* Product Details */}
          <div className="product-detail w-full lg:w-1/2">
            <div className="store-detail flex flex-col justify-center gap-6">
              <h1 className="text-2xl font-bold text-darkBlue">
                {product.name}
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {product.details || "No product details available."}
              </p>

              {/* Store Info */}
              {store ? (
                <div
                  className="flex items-center gap-3 hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={() => navigate(`/store/${store.id}`)}
                >
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-base text-blue-600">{store.name}</span>
                </div>
              ) : (
                <p className="text-gray-500">
                  Store information not available.
                </p>
              )}

              {/* Contact Information */}
              <div className="contact grid grid-cols-2 md:grid-cols-3 gap-4">
                {store?.location && (
                  <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-100 transition">
                    <HiMiniHome className="text-xl text-blue-600" />
                    <a href={store.location} className="text-blue-600">
                      Location
                    </a>
                  </div>
                )}
                {store?.phone && (
                  <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-100 transition">
                    <FaPhone className="text-xl text-green-600" />
                    <a
                      href={`tel:${store.phone}`}
                      className="text-green-600 text-xs"
                    >
                      {store.phone}
                    </a>
                  </div>
                )}
                {store?.facebook && (
                  <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-100 transition">
                    <FaSquareFacebook className="text-xl text-blue-800" />
                    <a href={store.facebook} className="text-blue-600">
                      Facebook
                    </a>
                  </div>
                )}
                {store?.instagram && (
                  <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-100 transition">
                    <GrInstagram className="text-xl text-pink-700" />
                    <a href={store.instagram} className="text-blue-600">
                      Instagram
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Product Sections */}
            <div className="mt-6">
              <SectionDisplay sections={sections} />
            </div>
          </div>
        </div>
      </div>
      <ProductFooter />

      <Footer />
    </div>
  );
};

export default StoresCard;
