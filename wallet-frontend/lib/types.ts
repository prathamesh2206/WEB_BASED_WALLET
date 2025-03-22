export type Token = {
    id: string
    name: string
    symbol: string
    balance: number
    fiatValue: number
    price: number
    priceChange24h: number
    icon: string
  }
  
  export type Transaction = {
    id: string
    type: "sent" | "received"
    address: string
    amount: number
    token: string
    fiatValue: number
    status: "pending" | "confirmed" | "failed"
    timestamp: number
    hash: string
    confirmations: number
    networkFee: number
    speed: "fast" | "medium" | "slow"
  }
  
  export type Network = {
    id: string
    name: string
    icon: string
  }
  
  export type Currency = {
    code: string
    symbol: string
    name: string
  }
  
  