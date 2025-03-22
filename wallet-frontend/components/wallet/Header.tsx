"use client"

import { useState } from "react"
import { Copy, Check, ChevronDown, Settings, Bell } from "lucide-react"
import { ModeToggle } from "@/components/landing/mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { walletAddress, networks, currencies } from "@/lib/data"

export default function Header() {
  const [copied, setCopied] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0])
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">CW</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">CryptoWallet</span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-3">
          <div className="hidden md:flex items-center mr-2">
            <div
              className="flex items-center border border-border rounded-md px-2 py-1 text-sm cursor-pointer"
              onClick={copyToClipboard}
            >
              <span className="text-muted-foreground mr-1 hidden sm:inline">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
              </span>
              <span className="text-muted-foreground mr-1 sm:hidden">
                {walletAddress.substring(0, 4)}...{walletAddress.substring(walletAddress.length - 2)}
              </span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                <span className="hidden sm:inline-block">{selectedNetwork.name}</span>
                <span className="sm:hidden">{selectedNetwork.name.substring(0, 3)}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {networks.map((network) => (
                <DropdownMenuItem key={network.id} onClick={() => setSelectedNetwork(network)}>
                  {network.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                {selectedCurrency.code}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {currencies.map((currency) => (
                <DropdownMenuItem key={currency.code} onClick={() => setSelectedCurrency(currency)}>
                  {currency.symbol} {currency.code} - {currency.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

