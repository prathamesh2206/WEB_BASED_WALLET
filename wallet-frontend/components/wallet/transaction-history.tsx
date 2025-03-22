"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownLeft, Search, Clock, CheckCircle, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { transactions } from "@/lib/data"
import type { Transaction } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"

interface TransactionHistoryProps {
  onTransactionClick: (transaction: Transaction) => void
}

export default function TransactionHistory({ onTransactionClick }: TransactionHistoryProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTransactions = transactions.filter(
    (tx) =>
      tx.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.token.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.hash.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <CardTitle>Recent Transactions</CardTitle>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              className="pl-8 w-full sm:w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">Address</th>
                <th className="text-right p-3">Amount</th>
                <th className="text-right p-3">Status</th>
                <th className="text-right p-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-border/50 hover:bg-muted/30 cursor-pointer"
                  onClick={() => onTransactionClick(transaction)}
                >
                  <td className="p-3">
                    <div className="flex items-center">
                      {transaction.type === "sent" ? (
                        <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-3">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3">
                          <ArrowDownLeft className="h-4 w-4" />
                        </div>
                      )}
                      <span className="font-medium capitalize">{transaction.type}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="font-medium">
                      {transaction.address.substring(0, 6)}...
                      {transaction.address.substring(transaction.address.length - 4)}
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <div className="font-medium">
                      {transaction.amount.toLocaleString("en-US", { maximumFractionDigits: 4 })} {transaction.token}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      $
                      {transaction.fiatValue.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    {transaction.status === "pending" && (
                      <div className="flex items-center justify-end">
                        <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-yellow-500">Pending</span>
                      </div>
                    )}
                    {transaction.status === "confirmed" && (
                      <div className="flex items-center justify-end">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-green-500">Confirmed</span>
                      </div>
                    )}
                    {transaction.status === "failed" && (
                      <div className="flex items-center justify-end">
                        <XCircle className="h-4 w-4 text-red-500 mr-1" />
                        <span className="text-red-500">Failed</span>
                      </div>
                    )}
                  </td>
                  <td className="p-3 text-right text-muted-foreground">
                    {formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true })}
                  </td>
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-4 text-muted-foreground">
                    No transactions found matching "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

