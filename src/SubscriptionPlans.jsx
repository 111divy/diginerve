import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import tick from "./assets/Images/tick.png";

function SubscriptionPlans() {
  const navigate = useNavigate();

  const [plans] = useState([
    {
      title: "DigiOne",
      subtitle: "Anatomy, Physiology & Biochemistry",
      price: "₹31,999.00",
      duration: "12 Months",
      features: [
        "300+ Hrs of Video Lectures",
        "350+ Topics in Notes",
        "1500+ Questions in QBank",
        "50+ OSCEs",
        "300+ GEMS",
        "Test Series",
        "Drug Chart",
        "Dr. Wise AI Chatbot",
        "Regular Webinars",
      ],
    },
    {
      title: "DigiNEET",
      subtitle: "Covers all 19 MBBS Subjects",
      price: "₹31,999.00",
      duration: "36 Months",
      recommended: true,
      features: [
        "1400+ Hrs of Video Lectures",
        "1,500+ Topics in Notes",
        "15,000+ Questions in QBank",
        "450+ OSCEs",
        "1800+ GEMS",
        "Test Series",
        "Drug Chart",
        "Dr. Wise AI Chatbot",
        "Regular Webinars",
      ],
    },
    {
      title: "DigiTwo",
      subtitle: "Microbiology, Pathology & Pharmacology",
      price: "₹31,999.00",
      duration: "12 Months",
      features: [
        "370+ Hrs of Video Lectures",
        "320+ Topics in Notes",
        "2,000+ Questions in QBank",
        "450+ GEMS",
        "30+ OSCEs & OSPEs",
        "Test Series",
        "Drug Chart",
        "Dr. Wise AI Chatbot",
        "Regular Webinars",
      ],
    },
  ]);

  return (
    <div className="bg-blue-900 py-10 px-4 text-white min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Choose Plan That Suits Your Need!
        </h2>
        <p className="mt-2 text-base">
          From university exams to NEET PG, get the edge with our customized
          course plans.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={17}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white text-black rounded-md p-5 flex flex-col space-x-2 mt-10 mb-10  h-full ${
                  plan.recommended ? "border-4 border-yellow-400 scale-105" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="bg-yellow-300 text-black text-center  overflow-hidden px-4 py-1 rounded-full mb-3 font-semibold">
                    RECOMMENDED ✨
                  </div>
                )}

                <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center">
                  <h3 className="text-2xl font-bold">
                    <span className="text-yellow-500">Digi</span>
                    <span className="text-blue-900">
                      {plan.title.replace("Digi", "")}
                    </span>
                  </h3>
                  <p className="mt-2 text-xs border border-gray-400 px-2 py-1 rounded-full inline-block">
                    {plan.subtitle}
                  </p>
                </div>

                <ul className="mb-4 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start mb-1">
                      <img src={tick} alt="tick" className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <select className="border rounded-full py-1 px-3 text-gray-700 text-sm">
                    <option>{plan.duration}</option>
                  </select>
                  <div className="text-lg font-bold text-blue-900">
                    {plan.price}
                  </div>
                </div>

                <button
                  className="bg-blue-900 text-white py-2 rounded-full text-sm hover:bg-blue-500"
                  onClick={() => navigate("/thank-you")}
                >
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-8 text-sm">
        Use coupon{" "}
        <span className="bg-white text-blue-900 font-bold px-1 py-0.5 rounded">
          DIGIUG
        </span>{" "}
        to get additional discount.
      </div>
    </div>
  );
}

export default SubscriptionPlans;
