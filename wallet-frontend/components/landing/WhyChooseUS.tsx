import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveUpRight, MoveDownLeft, ShieldCheck, CloudLightning, Globe } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description: "Your funds are protected with industry-leading encryption and multi-layer security.",
  },
  {
    icon: CloudLightning,
    title: "Lightning-Fast Transactions",
    description: "Experience instant transactions with our high-speed blockchain network.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Send and receive funds from anywhere in the world with ease.",
  },
  {
    icon: MoveUpRight,
    title: "Low Fees",
    description: "Enjoy low transaction fees and zero hidden charges.",
  },
  {
    icon: MoveDownLeft,
    title: "Non-Custodial",
    description: "You have full control of your assets—no intermediaries, no restrictions.",
  },
  {
    icon: ShieldCheck,
    title: "User-Friendly Interface",
    description: "Our intuitive UI makes crypto easy for beginners and professionals alike.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="text-primary">Our Wallet?</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Secure, fast, and built for the future of digital finance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 flex flex-col gap-4 border rounded-xl shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <feature.icon className="w-10 h-10 text-primary" />
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
