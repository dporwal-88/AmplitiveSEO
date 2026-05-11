import FeaturesCRM from "@/CRM/features";
import CardsCRM from "@/CRM/cards";
import FeaturesSEO from "@/SEO/features";
import CardsSEO from "@/SEO/cards";
import FeaturesWorkFlow from "@/WorkflowAutomation/Features";
import CardsWorkFlow from "@/WorkflowAutomation/Cards"
import FeaturesCalendar from "@/calendar/Features";
import CardsCalendar from "@/calendar/Cards"
import FeaturesLinkedin from "@/LinkedIn/Features"
import CardsLinkedin from "@/LinkedIn/Cards"
import FeaturesAds from "@/ads/Features"
import CardsAds from "@/ads/Cards"


export default function Home() {
  return (
    <div>
      
      {/* <FeaturesCRM/>
      <CardsCRM/> */}

      {/* <FeaturesSEO/>
      <CardsSEO/> */}

      <FeaturesWorkFlow/>
      <CardsWorkFlow/>

      {/* <FeaturesCalendar/>
      <CardsCalendar/> */}

      {/* <FeaturesLinkedin/>
      <CardsLinkedin/> */}

      {/* <FeaturesAds/>
      <CardsAds/> */}


    </div>
  );
}
