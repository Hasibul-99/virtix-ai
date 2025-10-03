import CTA from "../../components/pages/home/CTA";
import CustomerInteractions from "../../components/pages/home/CustomerInteractions";
import ComparePlans from "../../components/pages/pricing/ComparePlans";
import Hero from "../../components/pages/pricing/Hero";

export default function Pricing() {
  return (
    <>
      <Hero />
      <ComparePlans />
      <CustomerInteractions />
      <CTA />
    </>
  )
}
