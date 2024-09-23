import React from "react";

const GradientBackground: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-bunkerBlue to-bunkerBlue min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Our latest products</h1>
      <p className="text-gray-300 mt-4">
        Explore our cutting-edge dashboard, delivering high-quality solutions
        tailored to your needs.
      </p>
      <div className="mt-6">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded-lg text-black"
        />
        <button className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default GradientBackground;
