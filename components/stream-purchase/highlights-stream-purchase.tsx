import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Assuming you're using @shadcn/ui for cards.
import {
  FaCogs,
  FaWrench,
  FaThumbsUp,
  FaMobileAlt,
  FaHeadset,
  FaBullseye,
} from "react-icons/fa";

interface HighlightItem {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const highlights: HighlightItem[] = [
  {
    id: 1,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
    icon: <FaCogs className="text-xl text-gray-200" />,
  },
  {
    id: 2,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
    icon: <FaWrench className="text-xl text-gray-200" />,
  },
  {
    id: 3,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    icon: <FaThumbsUp className="text-xl text-gray-200" />,
  },
  {
    id: 4,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    icon: <FaMobileAlt className="text-xl text-gray-200" />,
  },
  {
    id: 5,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
    icon: <FaHeadset className="text-xl text-gray-200" />,
  },
  {
    id: 6,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
    icon: <FaBullseye className="text-xl text-gray-200" />,
  },
];

const HighlightsStreamPurchase = () => {
  return (
    <section className="py-12  text-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Highlights</h2>
        <p className="mb-12 text-gray-400">
          Explore why our product stands out: adaptability, durability,
          user-friendly design, and innovation. Enjoy reliable customer support
          and precision in every detail.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {highlights.map((item) => (
          <Card
            key={item.id}
            className="p-6 bg-gray-800 border-none hover:bg-gray-700 transition-colors duration-200"
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <CardTitle className="text-lg font-semibold text-white">
                  {item.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardDescription className="mt-2 text-sm text-gray-400">
              {item.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HighlightsStreamPurchase;
