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
    <div className="bg-blue-900 text-white py-16 px-4 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-white/80 text-lg">
            A platform built by experts, trusted by thousands of students, and{" "}
            <br />
            backed by proven results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-10">
          <div className="flex-shrink-0">
            <div className="w-[493px] h-[331px] rounded-xl overflow-hidden">
              <img
                src={studentsImg}
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-md">
            {numbersData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[72px] h-[72px] object-contain"
                />
                <div>
                  <p className="text-xl font-bold">{item.count}</p>
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
