import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight?: boolean; // e.g. for "Most Popular" plan
  highlightLabel?: string; // e.g. "Most Popular"
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  description,
  features,
  buttonText,
  highlight = false,
  highlightLabel,
}) => {
  return (
    <div
      className={`relative flex flex-col rounded-lg p-6 md:p-8 w-full md:w-1/3 
        bg-white/5 backdrop-blur-sm shadow-lg text-white 
        ${highlight ? "border border-orange-400" : "border border-white/10"}
      `}
    >
      {highlight && highlightLabel && (
        <span className="absolute top-3 right-3 text-xs font-semibold bg-orange-500 px-2 py-1 rounded text-white uppercase tracking-wide">
          {highlightLabel}
        </span>
      )}

      <h3 className="text-xl font-semibold mb-2">{planName}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <p className="mb-6 text-sm text-gray-300">{description}</p>

      <button
        className={`py-2 px-4 rounded mb-6 font-medium transition-colors 
          ${
            highlight
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-700 hover:bg-gray-600"
          }
        `}
      >
        {buttonText}
      </button>

      <ul className="space-y-2 text-sm leading-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <CheckIcon className="w-4 h-4 text-green-400 flex-none" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
