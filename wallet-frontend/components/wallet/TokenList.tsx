"use client"

import { useState } from "react"
import { ArrowUpDown, Search, ArrowUp, ArrowDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { tokens } from "@/lib/data"
import type { Token } from "@/lib/types"

type SortField = "name" | "balance" | "fiatValue" | "priceChange24h"
type SortDirection = "asc" | "desc"

export default function TokenList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState<SortField>("fiatValue")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    let comparison = 0

    switch (sortField) {
      case "name":
        comparison = a.name.localeCompare(b.name)
        break
      case "balance":
        comparison = a.balance - b.balance
        break
      case "fiatValue":
        comparison = a.fiatValue - b.fiatValue
        break
      case "priceChange24h":
        comparison = a.priceChange24h - b.priceChange24h
        break
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4 ml-1" />
    return sortDirection === "asc" ? <ArrowUp className="h-4 w-4 ml-1" /> : <ArrowDown className="h-4 w-4 ml-1" />
  }

  return (
    <Card className="mb-6 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <CardTitle>Tokens</CardTitle>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tokens..."
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
                <th className="text-left p-3">
                  <Button variant="ghost" className="font-medium p-0 h-auto" onClick={() => handleSort("name")}>
                    Token {getSortIcon("name")}
                  </Button>
                </th>
                <th className="text-right p-3">
                  <Button variant="ghost" className="font-medium p-0 h-auto" onClick={() => handleSort("balance")}>
                    Balance {getSortIcon("balance")}
                  </Button>
                </th>
                <th className="text-right p-3">
                  <Button variant="ghost" className="font-medium p-0 h-auto" onClick={() => handleSort("fiatValue")}>
                    Value {getSortIcon("fiatValue")}
                  </Button>
                </th>
                <th className="text-right p-3">
                  <Button
                    variant="ghost"
                    className="font-medium p-0 h-auto"
                    onClick={() => handleSort("priceChange24h")}
                  >
                    24h {getSortIcon("priceChange24h")}
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTokens.map((token) => (
                <TokenRow key={token.id} token={token} />
              ))}
              {sortedTokens.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-muted-foreground">
                    No tokens found matching "{searchQuery}"
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

function TokenRow({ token }: { token: Token }) {
  return (
    <tr className="border-b border-border/50 hover:bg-muted/30 cursor-pointer">
      <td className="p-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <span className="text-sm font-bold">{token.symbol.charAt(0)}</span>
          </div>
          <div>
            <div className="font-medium">{token.name}</div>
            <div className="text-sm text-muted-foreground">{token.symbol}</div>
          </div>
        </div>
      </td>
      <td className="p-3 text-right">
        <div className="font-medium">{token.balance.toLocaleString("en-US", { maximumFractionDigits: 4 })}</div>
        <div className="text-sm text-muted-foreground">{token.symbol}</div>
      </td>
      <td className="p-3 text-right">
        <div className="font-medium">
          ${token.fiatValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="text-sm text-muted-foreground">
          ${token.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </td>
      <td className="p-3 text-right">
        <div className={`font-medium ${token.priceChange24h >= 0 ? "text-green-500" : "text-red-500"}`}>
          {token.priceChange24h >= 0 ? "+" : ""}
          {token.priceChange24h.toFixed(2)}%
        </div>
      </td>
    </tr>
  )
}

