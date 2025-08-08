import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "./assets/Images/apurba.png";
import img2 from "./assets/Images/archith.png";
import img3 from "./assets/Images/dranshuman.png";
import img4 from "./assets/Images/roshni.png";

function Mentors() {
  const allMentors = [
    { name: "Dr Apurba S Sastry", subject: "Microbiology", picture: img1 },
    { name: "Dr Archith Boolor", subject: "Medicine", picture: img2 },
    { name: "Dr Anshuman Pancholi", subject: "Surgery", picture: img3 },
    { name: "Dr Roshini P", subject: "OBGYN", picture: img4 },
  ];

  return (
    <div className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Meet Your Mentors
        </h2>
        <p className="text-gray-600 text-lg mt-3 mb-10">
          Our courses are made by top doctors and professors from the best
          medical institutions in India.
        </p>

        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
          >
            {allMentors.map((m, i) => (
              <SwiperSlide key={i}>
                <div className="bg-blue-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition mx-1">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img
                      src={m.picture}
                      alt={m.name}
                      className="rounded-full object-cover w-full h-full border-4 border-white shadow"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {m.name}
                  </h3>
                  <p className="text-sm text-gray-600">{m.subject}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-6 mt-6">
          {allMentors.map((m, i) => (
            <div
              key={i}
              className="bg-blue-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={m.picture}
                  alt={m.name}
                  className="rounded-full object-cover w-full h-full border-4 border-white shadow"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
