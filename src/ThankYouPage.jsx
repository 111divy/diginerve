import { FaApple, FaGooglePlay } from "react-icons/fa";
import image from "./assets/Images/image.png";
import image1 from "./assets/Images/image1.png";

const ThankYouPage = () => {
  return (
    <div className="w-full min-h-screen mx-auto bg-white border relative overflow-hidden">
      <div className="flex flex-col items-center pt-8 px-4 relative h-auto lg:h-[70%]">
        <div className="absolute top-4 left-4">
          <img
            src={image}
            alt="DigiNerve Logo"
            className="h-16 sm:h-20 object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mt-20 text-center">
          Thank You!
        </h1>
        <p className="text-lg sm:text-2xl font-semibold text-gray-900 mt-2 text-center">
          Your payment was successful!
        </p>

        <p className="text-gray-500 text-base sm:text-xl text-center mt-2 max-w-md">
          Get started by downloading the DigiNerve app and access your courses
          instantly.
          <br className="hidden sm:block" />
          <span className="font-medium text-gray-700">Happy Learning!</span>
        </p>

        <button className="mt-5 bg-blue-900 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
          DOWNLOAD THE APP
          <FaApple size={18} className="sm:size-5" />
          <FaGooglePlay size={18} className="sm:size-5" />
        </button>

        {/* Bottom images */}
        <div className="absolute left-0 bottom-[-10px] w-28 sm:w-auto">
          <img
            src={image1}
            alt="Doctors"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute right-4 sm:right-20 bottom-[-10px] w-28 sm:w-auto">
          <img
            src={image1}
            alt="Doctors"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-blue-950 py-8 sm:py-10 flex flex-col items-center px-4">
        <h2 className="text-white text-lg sm:text-xl font-bold mb-2 text-center">
          Never Miss an Update
        </h2>
        <p className="text-white text-center text-sm sm:text-xl mb-5 leading-snug sm:leading-normal">
          Join our WhatsApp channel to receive timely updates on events,
          promotions,
          <br className="hidden sm:block" />
          and important announcements.
        </p>
        <button className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-green-600 text-sm sm:text-base">
          JOIN CHANNEL
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
