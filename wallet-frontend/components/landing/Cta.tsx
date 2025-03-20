import { Badge, MoveRight, PhoneCall } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <div>
      <div className="w-full py-12 lg:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col text-center bg-muted rounded-md p-6 lg:p-14 gap-6 items-center">
            <div>
              <Badge>Get Started</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                Secure. Fast. Your Wallet for the Future.
              </h3>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                Take control of your digital assets with ease. Store, send, and
                receive cryptocurrencies securely, all in one place.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button className="gap-2" variant="outline">
                Learn More <PhoneCall className="w-4 h-4" />
              </Button>
              <Button className="gap-2">
                Create Wallet <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
