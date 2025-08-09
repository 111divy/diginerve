import { FaApple, FaGooglePlay } from "react-icons/fa";
import logo from "./assets/Images/image.png";

const ThankYouPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white relative overflow-hidden">
      <div className="relative flex flex-col items-center px-4 pt-6 pb-20">
        <div className="absolute top-4 left-4 sm:left-8 sm:top-6 sm:block">
          <img
            src={logo}
            alt="DigiNerve Logo"
            className="h-12 sm:h-30 object-contain"
          />
        </div>

        {/* <div className="sm:hidden flex justify-center mb-4">
          <img
            src={logo}
            alt="DigiNerve Logo"
            className="h-10 object-contain"
          />
        </div> */}

        <h1 className="text-xl sm:text-5xl font-bold text-blue-900 mt-12 sm:mt-20 text-center">
          Thank You!
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2 text-center">
          Your payment was successful!
        </p>
        <p className="text-gray-500 text-xl sm:text-xl text-center mt-2 max-w-md">
          Get started by downloading the DigiNerve app and access your courses
          instantly. <br />
          <br className="hidden sm:block" />
          <span className="font-medium text-xl text-gray-700">
            Happy Learning!
          </span>
        </p>

        <button className="mt-5 bg-blue-900 text-white px-4 text-2xl sm:px-6 py-2 rounded-lg flex items-center gap-2 sm:gap-3 sm:text-base">
          DOWNLOAD THE APP
          <FaApple size={18} className="sm:size-5" />
          <FaGooglePlay size={18} className="sm:size-5" />
        </button>
      </div>

      <div className="w-full bg-blue-950 py-8 sm:py-10 flex flex-col items-center px-4">
        <h2 className="text-white text-xl sm:text-xl font-bold mb-2 text-center">
          Never Miss an Update
        </h2>
        <p className="text-white text-center text-xl sm:text-xl mb-5 leading-snug sm:leading-normal">
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
