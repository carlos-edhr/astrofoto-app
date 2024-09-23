"use client";
import { useState } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
}

const features: Feature[] = [
  {
    id: "dashboard",
    title: "Fotografía",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora distinctio aperiam nobis officiis blanditiis laudantium ",
    videoSrc:
      "https://cdn.pixabay.com/video/2022/12/06/141810-778906762_large.mp4",
    // "https://cdn.pixabay.com/video/2020/01/25/31569-387675206_large.mp4", // Replace with the actual image path
  },
  {
    id: "mobile-integration",
    title: "Astronomía",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora distinctio aperiam nobis officiis blanditiis laudantium ",
    videoSrc:
      "https://cdn.pixabay.com/video/2020/01/25/31569-387675206_large.mp4", // Replace with the actual image path
  },
  {
    id: "platforms",
    title: "Nosotros",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora distinctio aperiam nobis officiis blanditiis laudantium .",
    videoSrc: "https://cdn.pixabay.com/video/2024/09/07/230245_large.mp4", // Replace with the actual image path
  },
];

const ProductFeaturesStreamPurchase = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);

  return (
    <div className="md:w-[550]  items-center justify-center ">
      <div className=" pt-10 px-7 md:px-12">
        <h2 className="text-2xl font-semibold">Product Features</h2>
        <p className="text-muted-foreground">
          Provide a brief overview of the key features of the product. For
          example, you could list the number of features, their types or
          benefits, and add-ons.
        </p>
      </div>

      <div className="bg-slate-950/10 flex flex-col md:flex-row items-center md:items-start justify-center space-y-6 md:space-y-0 md:space-x-8 pt-6 px-7 md:px-12">
        {/* Left Video Section */}

        <div className=" w-full h-fit  flex justify-center p-1 bg-gradient-to-t from-blue-900 via-black to-blue-950 rounded-md">
          <div className="bg-bunkerBlue p-1 rounded-md">
            <video
              src={selectedFeature.videoSrc}
              autoPlay
              loop
              // alt={selectedFeature.title}
              className=" w-fill h-fill rounded-lg shadow-lg"
            ></video>
          </div>
        </div>

        {/* Right Features List */}
        <div className=" w-full  space-y-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`cursor-pointer p-4 border rounded-lg transition-colors duration-300 ${
                selectedFeature.id === feature.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-bunkerBlue text-gray-300 border-gray-600 hover:bg-gray-600"
              }`}
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesStreamPurchase;
