import StarfieldStream from "./StarfieldStream";

const HeroStreamPurchase = () => {
  return (
    <div className="h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-bunkerBlue to-bunkerBlue flex flex-col items-center justify-center pb-10">
      <h1 className="sm:text-5xl text-2xl flex flex-col sm:items-center  sm:justify-center pt-10  ">
        Congreso Internacional de
      </h1>
      <span className="text-primaryLanding sm:text-5xl text-2xl flex flex-col sm:items-center sm:justify-center">
        Astrofotografía
      </span>
      <div className="flex flex-col w-[325px] sm:w-[550px] items-center justify-center  text-gray-300">
        <p className="text-sm sm:text-lg pt-5 ">
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </p>
      </div>
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
      <div className="pt-10 ">
        <div className="relative p-1 bg-gradient-to-t from-blue-900 via-black to-blue-950 rounded-xl">
          <div className="bg-black p-1 rounded-xl">
            <video
              //   className="flex w-full pt-10"
              className="rounded-xl w-full "
              //   width="900"
              // controls
              autoPlay
              loop
              src="https://media.istockphoto.com/id/524804954/es/v%C3%ADdeo/valle-de-la-muerte-de-la-via-l%C3%A1ctea-lapso-de-tiempo-4-k.mp4?s=mp4-640x640-is&k=20&c=NxqdsMIA2gbOyJQ7IUCRZRfoQww8D9cq-W-2PxEkhQY="
            >
              {/* <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                type="video/mp4"
              /> */}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStreamPurchase;
