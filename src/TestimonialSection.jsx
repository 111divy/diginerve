import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image from "./assets/Images/image.png";

const testimonials = Array(3).fill({
  name: "Dr Anuj Sharma",
  title: "Microbiology",
  text: "Your Path to Medical Excellence Starts Here!",
});

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-[#1B2A4E] mb-2">
        Don’t Just Take Our Word for It
      </h2>
      <p className="text-[#5E6D8A] max-w-xl mx-auto mb-12">
        From first-year MBBS to NEET PG, hear directly from those who’ve
        experienced the DigiNerve difference.
      </p>

      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <article className="relative bg-white rounded-2xl shadow-md px-6 pt-6 pb-8 w-full max-w-[353px] mx-auto text-left hover:shadow-xl">
                {index === 0 && (
                  <div className="absolute -top-4 -left-4 text-[80px] text-[#EAF3FF] z-0">
                    &ldquo;
                  </div>
                )}
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div>
                    <h4 className="text-[#1B2A4E] font-bold text-sm mb-1">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                  <div className="relative w-[100px] h-[100px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <div className="w-full h-full bg-gray-200"></div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-[#5E6D8A] relative z-10 leading-relaxed space-y-1">
                  <p>{t.text}</p>
                  <p>{t.text}</p>
                  <p>{t.text}</p>
                  <p>{t.text}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-6">
        {testimonials.map((t, index) => (
          <article
            key={index}
            className="relative bg-white rounded-2xl shadow-md px-6 pt-6 pb-8 w-[353px] h-[325px] text-left hover:shadow-xl"
          >
            {index === 0 && (
              <div className="absolute -top-4 -left-4 text-[80px] text-[#EAF3FF] z-0">
                &ldquo;
              </div>
            )}
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div>
                <h4 className="text-[#1B2A4E] font-bold text-sm mb-1">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
              <div className="relative w-[100px] h-[100px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="text-sm text-[#5E6D8A] relative z-10 leading-relaxed space-y-1">
              <p>{t.text}</p>
              <p>{t.text}</p>
              <p>{t.text}</p>
              <p>{t.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
