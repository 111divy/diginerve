import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SubscriptionPlans from "./SubscriptionPlans";
import Mentors from "./Mentors";
import Videosection from "./Videosection";
import WhatYoullLearn from "./WhatYoullLearn";
import NumbersSection from "./NumbersSection";
import TestimonialSection from "./TestimonialSection";
import TopDocBanner from "./TopDocBanner";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import ThankYouPage from "./ThankYouPage";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <SubscriptionPlans />
              <Mentors />
              <Videosection />
              <WhatYoullLearn />
              <NumbersSection />
              <TestimonialSection />
              <TopDocBanner />
              <FAQSection />
              <Footer />
            </>
          }
        />

        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
