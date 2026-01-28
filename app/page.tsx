import Amenities from "@/src/component/Amenities/Amenities";
import Brochure from "@/src/component/Brochure/Brochure";
import DeveloperSection from "@/src/component/Developer/Developer";
import EnquirySection from "@/src/component/EnquirySection/EnquirySection";
import FloorPlanSection from "@/src/component/FloorPlan/FloorPlan";
import FooterSection from "@/src/component/Footer/Footer";
import Header from "@/src/component/Header/Header";
import Hero from "@/src/component/Hero/Hero";
import Highlights from "@/src/component/Highlights/Highlights";
import LocationSection from "@/src/component/Location/Location";
import Overview from "@/src/component/Overview/Overview";
import PricePlan from "@/src/component/PricePlan/PricePlan";
import VideoSection from "@/src/component/Video/Video";
import VirtualTour from "@/src/component/VirtualTour/VirtualTour";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Highlights />
      <EnquirySection />
      <Amenities />
      <PricePlan />
      <VirtualTour />
      <VideoSection />
      <FloorPlanSection />
      <Brochure />
      <LocationSection />
      <DeveloperSection />
      <FooterSection />
    </>
  );
}
