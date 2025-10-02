import CustomerInteractionsRevarce from "../../components/pages/feature/CustomerInteractionsRevarse";
import Hero from "../../components/pages/feature/Hero";
import CTA from "../../components/pages/home/CTA";
import CustomerInteractions from "../../components/pages/home/CustomerInteractions";
import Pricing from "../../components/pages/home/Pricing";

export default function Features() {
  return (
    <>
      <Hero />
      <CustomerInteractions />
      <CustomerInteractionsRevarce />
      <Pricing />
      <CTA />
    </>
  )
}