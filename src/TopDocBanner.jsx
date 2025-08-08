const TopDocBanner = () => {
  return (
    <section className="relative bg-blue-900 text-white py-10 px-4 overflow-visible">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-4 -left-4 w-16 h-16 border border-white rounded-md rotate-12 opacity-30"></div>

        <div className="absolute bottom-4 left-24 w-20 h-20 border border-white rounded-md -rotate-12 opacity-30"></div>
        <div className="absolute -top-3 right-8 w-16 h-16 border border-white rounded-md rotate-45 opacity-30"></div>

        <div className="absolute bottom-4 right-2 w-24 h-24 border border-white rounded-md -rotate-6 opacity-30"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
          Your Journey to Becoming a <br className="sm:hidden" />
          Top Doc Starts Here!
        </h2>
        <button className="mt-6 px-5 py-2 border border-white rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default TopDocBanner;
