import { Check } from "lucide-react";
import type { ReactNode } from "react";

type CardSpotlightProps = {
  children: ReactNode;
  className?: string;
};

const CardSpotlight = ({ children, className }: CardSpotlightProps) => (
  <div className={className}>{children}</div>
);

type PricingTierProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

const PricingTier = ({ name, price, description, features, isPopular }: PricingTierProps) => {
  return (
    <CardSpotlight
      className={`h-full border-2 cursor-pointer rounded-xl ${
        isPopular ? "border-indigo-500" : "border-white/10"
      }`}
    >
      <div className="relative h-full p-3 lg:p-6 flex flex-col">
        {isPopular && (
          <span className="text-xs font-medium bg-indigo-400/30 text-indigo-100 rounded-full px-3 py-1 w-fit mb-4">
            Most Popular
          </span>
        )}

        {/* Name */}
        <h3 className="clash-display text-lg lg:text-xl">{name}</h3>

        {/* Price */}
        <div className="mb-4 mt-2">
          <span className="text-2xl lg:text-4xl font-bold clash-display text-indigo-300">
            {price}
          </span>
          {price !== "Custom" && <span className="text-gray-400">/month</span>}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm lg:text-base mb-6">{description}</p>

        {/* Options */}
        <ul className="space-y-3 mb-6 flex-grow ">
          {features.map((feature, index) => (
            <li key={index} className="centered-row gap-2">
              <Check className="w-5 h-5 text-indigo-300" />
              <span className="text-xs lg:text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}

        <button className="bg-indigo-500 py-2 lg:py-4 w-full text-zinc-50 rounded-full text-lg clash-display cursor-pointer hover:bg-indigo-400/10 hover:text-indigo-300 transition2 ">
          Start Trading
        </button>
      </div>
    </CardSpotlight>
  );
};

export default PricingTier;
