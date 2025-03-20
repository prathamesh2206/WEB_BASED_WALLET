import React from "react";
import { Key, MoveRight, Shield, Wallet, ArrowUpRight, ArrowDownLeft, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import VerticalCutReveal from "@/fancy/components/text/vertical-cut-reveal";

export default function Hero() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-40 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 relative">
      {/* Enhanced decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20 items-center lg:grid-cols-2 relative z-10">
          <div className="flex gap-6 flex-col">
            <div>

              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium bg-background/80 backdrop-blur-sm border-primary/20 text-primary shadow-sm">
                <Sparkles className="w-3.5 h-3.5 mr-2" /> Secure & Fast
              </Badge>
            </div>
            <div className="flex gap-6 flex-col">
              <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-lg tracking-tighter text-left font-bold text-foreground">
                <VerticalCutReveal staggerDuration={0.7} splitBy="lines">{" Your Crypto, \n Your Control!"}</VerticalCutReveal>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg text-left">
                Experience the future of finance with our web-based wallet. No
                downloads, no middlemen—just secure, seamless crypto transactions
                at your fingertips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button className="h-12 px-6 gap-2 group transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg rounded-md">
                Create Your Wallet <Key className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              </Button>
              <Button variant="outline" className="h-12 px-6 gap-2 group transition-all duration-300 border-border hover:border-primary/50 hover:bg-accent text-foreground rounded-md">
                Access Wallet <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center shadow-sm">
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">100% Secure</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center shadow-sm">
                  <Wallet className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Non-custodial</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-500/15 flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">User-friendly</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced wallet preview */}
          <div className="relative flex items-center justify-center p-4 md:p-8 mt-4 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/20 rounded-3xl blur-xl transform rotate-3"></div>
            
            <div className="relative z-10 w-full max-w-md md:max-w-lg bg-card p-6 md:p-8 rounded-2xl border border-border shadow-xl backdrop-blur-lg transform transition-all duration-500 hover:rotate-0 hover:scale-105 rotate-3">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="flex items-center">
                  <div className="bg-primary/15 p-2.5 rounded-lg mr-3 shadow-sm">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-semibold text-lg md:text-xl text-card-foreground">CryptoWallet</span>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/15 px-3 py-1.5 rounded-full shadow-sm">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">Protected</span>
                </div>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <div className="p-5 md:p-6 rounded-xl bg-muted border border-border shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm md:text-base text-muted-foreground">Total Balance</span>
                    <span className="text-sm md:text-base font-medium text-card-foreground">$12,345.67</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-card-foreground">2.345 ETH</div>
                  <div className="w-full bg-primary/15 h-1.5 rounded-full mt-4">
                    <div className="bg-primary h-1.5 w-2/3 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { symbol: "ETH", amount: "2.345", color: "bg-blue-500/25", textColor: "text-blue-500" },
                    { symbol: "BTC", amount: "0.186", color: "bg-orange-500/25", textColor: "text-orange-500" },
                    { symbol: "SOL", amount: "14.23", color: "bg-purple-500/25", textColor: "text-purple-500" },
                    { symbol: "USDT", amount: "325.5", color: "bg-green-500/25", textColor: "text-green-500" }
                  ].map((coin) => (
                    <div key={coin.symbol} className="p-4 rounded-xl bg-accent border border-border hover:bg-muted transition-colors cursor-pointer shadow-sm group">
                      <div className="flex items-center justify-between mb-1.5 group-hover:scale-105 transition-transform">
                        <span className={`font-medium ${coin.textColor}`}>{coin.symbol}</span>
                        <div className={`h-3.5 w-3.5 rounded-full ${coin.color} flex items-center justify-center`}>
                          <div className="h-2 w-2 rounded-full bg-card"></div>
                        </div>
                      </div>
                      <div className="text-sm text-accent-foreground">{coin.amount}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  <button className="flex-1 h-10 px-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md shadow-sm transition-colors">
                    <ArrowUpRight className="h-4 w-4" /> Send
                  </button>
                  <button className="flex-1 h-10 px-4 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md shadow-sm border border-border transition-colors">
                    <ArrowDownLeft className="h-4 w-4" /> Receive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}   