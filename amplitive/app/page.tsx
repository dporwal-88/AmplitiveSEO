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


export default function Home() {
  return (
    <div>
      
      {/* <FeaturesCRM/>
      <CardsCRM/> */}

      {/* <FeaturesSEO/>
      <CardsSEO/> */}

      {/* <FeaturesWorkFlow/>
      <CardsWorkFlow/> */}

      {/* <FeaturesCalendar/>
      <CardsCalendar/> */}

      <FeaturesLinkedin/>
      <CardsLinkedin/>


    </div>
  );
}
