"use client"

import { Copy, Check, ExternalLink } from "lucide-react"
import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import type { Transaction } from "@/lib/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TransactionModalProps {
  transaction: Transaction
  isOpen: boolean
  onClose: () => void
}

export default function TransactionModal({ transaction, isOpen, onClose }: TransactionModalProps) {
  const [copiedHash, setCopiedHash] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)

  const copyToClipboard = (text: string, type: "hash" | "address") => {
    navigator.clipboard.writeText(text)
    if (type === "hash") {
      setCopiedHash(true)
      setTimeout(() => setCopiedHash(false), 2000)
    } else {
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2000)
    }
  }

  const getStatusColor = () => {
    switch (transaction.status) {
      case "confirmed":
        return "text-green-500"
      case "pending":
        return "text-yellow-500"
      case "failed":
        return "text-red-500"
      default:
        return ""
    }
  }

  const getSpeedLabel = () => {
    switch (transaction.speed) {
      case "fast":
        return "Fast (< 5 min)"
      case "medium":
        return "Medium (5-15 min)"
      case "slow":
        return "Slow (> 15 min)"
      default:
        return ""
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Transaction Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Status:</span>
            <span className={`col-span-2 font-medium capitalize ${getStatusColor()}`}>{transaction.status}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Type:</span>
            <span className="col-span-2 font-medium capitalize">{transaction.type}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Amount:</span>
            <span className="col-span-2 font-medium">
              {transaction.amount.toLocaleString("en-US", { maximumFractionDigits: 4 })} {transaction.token}
              <span className="text-sm text-muted-foreground ml-2">
                ($
                {transaction.fiatValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
              </span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-start">
            <span className="text-sm text-muted-foreground">Address:</span>
            <div className="col-span-2 flex items-center">
              <span className="font-medium break-all mr-2">{transaction.address}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(transaction.address, "address")}
              >
                {copiedAddress ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-start">
            <span className="text-sm text-muted-foreground">Transaction Hash:</span>
            <div className="col-span-2 flex items-center">
              <span className="font-medium break-all mr-2">{transaction.hash}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(transaction.hash, "hash")}
              >
                {copiedHash ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Time:</span>
            <span className="col-span-2 font-medium">
              {formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true })}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Confirmations:</span>
            <span className="col-span-2 font-medium">{transaction.confirmations}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Network Fee:</span>
            <span className="col-span-2 font-medium">
              {transaction.networkFee.toLocaleString("en-US", { maximumFractionDigits: 6 })} {transaction.token}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-sm text-muted-foreground">Speed:</span>
            <span className="col-span-2 font-medium">{getSpeedLabel()}</span>
          </div>

          <div className="pt-2">
            <Button variant="outline" className="w-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View on Explorer
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

