"use client"

import { Home, Wallet, History, Shield } from "lucide-react"

interface MobileNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function MobileNavigation({ activeSection, setActiveSection }: MobileNavigationProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-background z-10">
      <div className="flex justify-around">
        <button
          onClick={() => setActiveSection("overview")}
          className={`flex flex-col items-center py-3 px-5 ${
            activeSection === "overview" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home className="h-5 w-5 mb-1" />
          <span className="text-xs">Overview</span>
        </button>

        <button
          onClick={() => setActiveSection("tokens")}
          className={`flex flex-col items-center py-3 px-5 ${
            activeSection === "tokens" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Wallet className="h-5 w-5 mb-1" />
          <span className="text-xs">Tokens</span>
        </button>

        <button
          onClick={() => setActiveSection("transactions")}
          className={`flex flex-col items-center py-3 px-5 ${
            activeSection === "transactions" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <History className="h-5 w-5 mb-1" />
          <span className="text-xs">History</span>
        </button>

        
      </div>
    </div>
  )
}

