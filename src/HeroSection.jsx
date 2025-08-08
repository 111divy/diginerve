import image1 from "./assets/Images/image1.png";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 pt-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
        <div className="text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 pt-6 leading-snug">
            Become a Top <br />
            <span className="text-blue-900">Medical Professional</span> <br />
            with Our <span className="text-blue-900">NEET PG/</span>
            <br />
            <span className="text-blue-900">MBBS Course.</span>
          </h1>

          <p className="text-gray-600 text-lg mt-4">
            Your Path to Medical Excellence Starts Here!
          </p>

          <div className="mt-6 flex justify-center lg:justify-start py-4">
            <button
              className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-800 transition"
              onClick={() => navigate("/thank-you")}
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="flex justify-center items-end bg-blue-50 rounded-xl">
          <img
            src={image1}
            alt="Medical Professionals"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
