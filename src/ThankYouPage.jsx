import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import image from "./assets/Images/image.png";
import image1 from "./assets/Images/image1.png";

const ThankYouPage = () => {
  return (
    <div className="w-full h-[854px] mx-auto bg-white border relative overflow-hidden">
      <div className="flex flex-col items-center pt-8 px-4 relative h-[70%]">
        <div className="absolute top-6 left-6">
          <img src={image} alt="DigiNerve Logo" className="h-25" />
        </div>

        <h1 className="text-5xl font-bold text-blue-900 mt-20">Thank You!</h1>
        <p className="text-2xl font-semibold text-gray-900 mt-2">
          Your payment was successful!
        </p>
        <p className="text-gray-500 text-xl text-center mt-1 max-w-md">
          Get started by downloading the DigiNerve app and access your courses
          instantly. <br />
          <span className="font-medium text-gray-700">Happy Learning!</span>
        </p>

        <button className="mt-5 bg-blue-900 text-white px-6 py-2 rounded-lg flex items-center gap-3">
          DOWNLOAD THE APP
          <FaApple size={20} />
          <FaGooglePlay size={20} />
        </button>

        <div className="absolute left-0 bottom-[-20px]">
          <img src={image1} alt="Doctors" className="h-100" />
        </div>
        <div className="absolute right-20 bottom-[-20px]">
          <img src={image1} alt="Doctors" className="h-100" />
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-blue-950 h-50 py-10 flex flex-col items-center">
        <h2 className="text-white text-xl font-bold mb-2">
          Never Miss an Update
        </h2>
        <p className="text-white text-center text-xl mb-5">
          Join our WhatsApp channel to receive timely updates on events,
          <br />
          promotions, and important announcements.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600">
          JOIN CHANNEL
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
