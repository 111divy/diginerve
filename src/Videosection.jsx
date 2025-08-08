import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import img1 from "./assets/Images/a.png";
import img2 from "./assets/Images/b.png";
import img3 from "./assets/Images/cc.png";
import img4 from "./assets/Images/dd.png";

function Videosection() {
  const navigate = useNavigate();
  const pagRef = useRef(null);

  const allLectures = [
    {
      title: "Infective Endocarditis",
      author: "Dr Archith Boloor",
      img: img1,
      kind: "Video Lecture",
    },
    {
      title: "Hypothyroidism & thyroiditis",
      author: "Dr Anshuman Pancholi",
      img: img2,
      kind: "Video Lecture",
    },
    {
      title: "Discussion: NEET PG 2023",
      author: "Dr Roshini P",
      img: img3,
      kind: "Previous Year Question",
    },
    {
      title: "Discussion: NEET PG 2023",
      author: "Dr Anshuman Pancholi",
      img: img4,
      kind: "Notes",
    },
  ];

  return (
    <div className="bg-blue-900 flex justify-center w-full">
      <div className="text-white py-12 px-4 text-center max-w-screen-xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Experience the DigiNerve Difference
        </h1>
        <p className="mb-10 text-white text-opacity-80 max-w-2xl mx-auto text-sm sm:text-base">
          Get a glimpse of how your mentors explain difficult stuff with videos
          and notes.
        </p>

        <div className="block sm:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{
              el: pagRef.current,
              clickable: true,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.pagination.el = pagRef.current;
                swiper.pagination.init();
                swiper.pagination.update();
              }, 0);
            }}
            className="w-full max-w-xs mx-auto"
          >
            {allLectures.map((lecture, i) => (
              <SwiperSlide key={i}>
                <Card {...lecture} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={pagRef} className="mt-3 flex justify-center gap-2"></div>
        </div>

        <div className="hidden sm:flex justify-center gap-6">
          {allLectures.map((lecture, i) => (
            <Card key={i} {...lecture} />
          ))}
        </div>

        <button
          className="bg-blue-900 text-white py-2 rounded-full text-sm hover:bg-blue-800"
          onClick={() => navigate("/thank-you")}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

function Card({ title, author, img, kind }) {
  return (
    <div className="text-white w-[272px] mx-auto">
      <div className="text-sm font-semibold mb-2 text-center">{kind}</div>
      <div className="relative w-full h-64 overflow-hidden rounded shadow-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="px-2 py-3">
        <h3 className="font-bold text-sm mb-1 text-center">{title}</h3>
        <p className="text-xs text-center text-white/80">{author}</p>
      </div>
    </div>
  );
}

export default Videosection;
