import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Assuming Shadcn UI is set up
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";

const pricingOptions: PricingOption[] = [
  {
    title: "Free",
    price: "$0",
    features: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonLabel: "Sign up for free",
    buttonAction: "#",
  },
  {
    title: "Professional",
    price: "$15",
    features: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonLabel: "Start now",
    buttonAction: "#",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "$30",
    features: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonLabel: "Contact us",
    buttonAction: "#",
  },
];

interface PricingOption {
  title: string;
  price: string;
  features: string[];
  buttonLabel: string;
  buttonAction: string;
  highlighted?: boolean;
}

const PricingStreamPurchase = () => {
  return (
    <section className="py-12  text-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
        <p className="mb-12 text-gray-400">
          Quickly build an effective pricing table for your potential customers
          with this layout.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {pricingOptions.map((option, idx) => (
          <Card
            key={idx}
            className={`p-6 ${
              option.highlighted
                ? "bg-gray-800 text-white shadow-lg transform scale-105"
                : "bg-gray-800"
            } hover:bg-gray-700 transition-transform duration-200`}
          >
            <CardHeader className="mb-4">
              <CardTitle className="text-xl font-semibold text-center">
                {option.title}
              </CardTitle>
              <CardDescription className="text-center text-4xl font-bold my-4">
                {option.price}{" "}
                <span className="text-lg font-normal">/ month</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="text-center mt-6">
              <Button
                className="w-full"
                // href={option.buttonAction}
                variant={option.highlighted ? "primary" : "default"}
              >
                {option.buttonLabel}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingStreamPurchase;
