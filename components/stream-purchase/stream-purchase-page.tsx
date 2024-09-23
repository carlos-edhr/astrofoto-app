import React from "react";
import HeroStreamPurchase from "./hero-stream-purchase";
import SponsorsStreamPurchase from "./sponsors-stream-purchase";
import ProductFeaturesStreamPurchase from "./product-features-stream-purchase";
import TestimonialsStreamPurchase from "./testimonials-stream-purchase";
import HighlightsStreamPurchase from "./highlights-stream-purchase";
import PricingStreamPurchase from "./pricing-stream-purchase";
import FAQStreamPurchase from "./faq-stream-purchase";
import { Separator } from "../ui/separator";
import StarfieldStream from "./StarfieldStream";
import StarsCanvas from "@/app/(landing)/(home)/_components/main/StarBackground";
const StreamPurchasePage = () => {
  return (
    <div className="h-full w-full  ">
      <StarfieldStream />
      <div className=" flex flex-col  ">
        <HeroStreamPurchase />
        {/* <SponsorsStreamPurchase /> */}
        <Separator className="w-full mt-10" />
        <ProductFeaturesStreamPurchase />
        <Separator className="w-full" />
        <TestimonialsStreamPurchase />
        <Separator className="w-full" />
        <HighlightsStreamPurchase />
        <Separator className="w-full" />
        <PricingStreamPurchase />
        <Separator className="w-full" />
        <FAQStreamPurchase />
      </div>
    </div>
  );
};

export default StreamPurchasePage;
