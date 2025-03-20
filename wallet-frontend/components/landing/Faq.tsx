import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const WalletFAQ = () => (
  <div className="w-full py-12 lg:py-24">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex gap-8 flex-col">
          <div className="flex flex-col gap-4">
            <Badge variant="outline">FAQ</Badge>
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
              Everything you need to know about our Wallet
            </h4>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground text-left">
              Securely store, send, and receive cryptocurrencies with ease.
              Here are answers to common questions to help you get started.
            </p>
          </div>
          <Button className="gap-2" variant="outline">
            Need Help? Contact Us <PhoneCall className="w-4 h-4" />
          </Button>
        </div>

        {/* Right Section - FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {[
            { question: "How secure is the wallet?", answer: "Our wallet uses end-to-end encryption and multi-layer security to protect your assets." },
            { question: "What cryptocurrencies does it support?", answer: "Currently, we support Bitcoin, Ethereum, Solana, and more." },
            { question: "Can I recover my wallet if I lose access?", answer: "Yes, use your backup seed phrase to restore your wallet." },
            { question: "Are there any transaction fees?", answer: "Minimal transaction fees apply based on network conditions." },
            { question: "Is my private key stored on your servers?", answer: "No, your private keys are stored locally on your device." },
            { question: "Does the wallet support staking?", answer: "Yes, you can stake supported assets directly within the wallet." },
          ].map((faq, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
