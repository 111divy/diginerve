import phoneIcon from "./assets/Images/phone.png";
import mentorIcon from "./assets/Images/mentor.png";
import videoIcon from "./assets/Images/video.png";
import appIcon from "./assets/Images/app.png";
import studentsImg from "./assets/Images/girls.png";

const numbersData = [
  { label: "App Downloads", count: "1,50,000+", icon: phoneIcon },
  { label: "Mentors", count: "400+", icon: mentorIcon },
  { label: "Hrs of Video Content", count: "2,000+", icon: videoIcon },
  { label: "App Rating", count: "4.5", icon: appIcon },
];

const NumbersSection = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 items-center">
        {/* Heading */}
        <div className="text-center max-w-3xl px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            A platform built by experts, trusted by thousands of students, and
            backed by proven results.
          </p>
        </div>

        {/* Image + Stats */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-10">
          {/* Left image */}
          <div className="flex-shrink-0 w-full sm:w-[400px] md:w-[493px]">
            <div className="rounded-xl overflow-hidden w-full aspect-[3/2]">
              <img
                src={studentsImg}
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-md">
            {numbersData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-16 h-16 sm:w-[72px] sm:h-[72px] object-contain"
                />
                <div>
                  <p className="text-lg sm:text-xl font-bold">{item.count}</p>
                  <p className="text-sm text-white/80">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
