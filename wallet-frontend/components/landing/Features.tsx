import {
  Badge,
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  KeyIcon,
  User,
  WalletIcon,
} from "lucide-react";
import React from "react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AuroraText } from "../magicui/aurora-text";
const features = [
  {
    Icon: WalletIcon,
    name: "Secure Transactions",
    description: "Send and receive funds with end-to-end encryption.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: KeyIcon,
    name: "Private Key Management",
    description: "Manage your private keys securely within your wallet.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multi-Currency Support",
    description: "Store and transact with multiple cryptocurrencies.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Transaction History",
    description: "View your past transactions in an organized timeline.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Real-Time Notifications",
    description: "Get alerts for incoming transactions and wallet activity.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const Features = () => {
  return (
    <div>
  <div className="w-full py-12 lg:py-24">
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 flex-col items-start">
          <div>
            <Badge>Wallet</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl md:text-4xl tracking-tighter max-w-xl font-regular text-left">
              Take control of your <AuroraText>CRYPTO</AuroraText> 
            </h2>
            <p className="text-base max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              A simple and secure way to store, send, and receive digital assets.
            </p>
          </div>
        </div>
        {/* bento */}
        <div>
          <BentoGrid>
            {features.map((feature, index) => (
              <BentoCard key={feature.name} {...feature}>
                {feature.background}
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Features;
