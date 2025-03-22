"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownLeft, Copy, Check, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { tokens, walletAddress } from "@/lib/data"

export default function WalletOverview() {
  const [copied, setCopied] = useState(false)

  const totalBalance = tokens.reduce((sum, token) => sum + token.fiatValue, 0)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-medium text-muted-foreground mb-1">Total Balance</h2>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">
                ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-green-500 ml-2">+2.4%</span>
            </div>

            <div className="mt-4 flex items-center">
              <span className="text-sm text-muted-foreground mr-2">Wallet Address:</span>
              <div className="flex items-center cursor-pointer group" onClick={copyToClipboard}>
                <span className="text-sm">
                  {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                </span>
                {copied ? (
                  <Check className="h-4 w-4 ml-1 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 ml-1 text-muted-foreground group-hover:text-foreground" />
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex-1 md:flex-none" variant="outline">
                  <ArrowDownLeft className="mr-2 h-4 w-4" />
                  Receive
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Receive Crypto</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <QrCode className="h-48 w-48 text-black" />
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Your Wallet Address</p>
                    <div className="flex items-center justify-center">
                      <code className="bg-muted p-2 rounded text-sm break-all">{walletAddress}</code>
                      <Button variant="ghost" size="icon" className="ml-2" onClick={copyToClipboard}>
                        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Send only supported tokens to this address. Sending unsupported tokens may result in permanent loss.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex-1 md:flex-none">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send Crypto</DialogTitle>
                </DialogHeader>
                <div className="p-4">
                  <p className="text-center text-muted-foreground mb-4">
                    This is a placeholder for the send functionality.
                  </p>
                  <p className="text-center text-sm">
                    In a real application, this would include fields for:
                    <br />- Recipient address
                    <br />- Amount to send
                    <br />- Token selection
                    <br />- Transaction fee options
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {tokens.slice(0, 5).map((token) => (
            <div key={token.id} className="bg-muted/30 rounded-lg p-3 border border-border/50">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">{token.symbol.charAt(0)}</span>
                </div>
                <span className="font-medium">{token.symbol}</span>
              </div>
              <div className="text-sm">
                <div className="font-medium">{token.balance.toLocaleString("en-US", { maximumFractionDigits: 4 })}</div>
                <div className="text-muted-foreground">
                  ${token.fiatValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

