import type { Token, Transaction, Network, Currency } from "./types"

export const tokens: Token[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    balance: 1.245,
    fiatValue: 3245.67,
    price: 2608.57,
    priceChange24h: 2.34,
    icon: "ethereum",
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.0345,
    fiatValue: 1578.23,
    price: 45746.52,
    priceChange24h: -1.2,
    icon: "bitcoin",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    balance: 12.5,
    fiatValue: 1125.75,
    price: 90.06,
    priceChange24h: 5.67,
    icon: "solana",
  },
  {
    id: "usdc",
    name: "USD Coin",
    symbol: "USDC",
    balance: 750.0,
    fiatValue: 750.0,
    price: 1.0,
    priceChange24h: 0.01,
    icon: "usdc",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    balance: 500.0,
    fiatValue: 225.0,
    price: 0.45,
    priceChange24h: -2.5,
    icon: "cardano",
  },
]

export const transactions: Transaction[] = [
  {
    id: "tx1",
    type: "received",
    address: "0x1a2b3c4d5e6f7g8h9i0j",
    amount: 0.5,
    token: "ETH",
    fiatValue: 1304.29,
    status: "confirmed",
    timestamp: Date.now() - 1000 * 60 * 30, // 30 minutes ago
    hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    confirmations: 15,
    networkFee: 0.002,
    speed: "fast",
  },
  {
    id: "tx2",
    type: "sent",
    address: "0x9i8h7g6f5e4d3c2b1a0",
    amount: 0.1,
    token: "ETH",
    fiatValue: 260.86,
    status: "confirmed",
    timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    hash: "0x0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
    confirmations: 42,
    networkFee: 0.001,
    speed: "medium",
  },
  {
    id: "tx3",
    type: "sent",
    address: "0x2b3c4d5e6f7g8h9i0j1a",
    amount: 0.25,
    token: "BTC",
    fiatValue: 11436.63,
    status: "confirmed",
    timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    hash: "0x1122334455667788990011223344556677889900112233445566778899001122",
    confirmations: 120,
    networkFee: 0.0005,
    speed: "medium",
  },
  {
    id: "tx4",
    type: "received",
    address: "0x7g8h9i0j1a2b3c4d5e6f",
    amount: 10.0,
    token: "SOL",
    fiatValue: 900.6,
    status: "confirmed",
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
    hash: "0xaabbccddeeff00112233445566778899aabbccddeeff00112233445566778899",
    confirmations: 1000,
    networkFee: 0.00001,
    speed: "fast",
  },
  {
    id: "tx5",
    type: "sent",
    address: "0x5e6f7g8h9i0j1a2b3c4d",
    amount: 100.0,
    token: "USDC",
    fiatValue: 100.0,
    status: "pending",
    timestamp: Date.now() - 1000 * 60 * 10, // 10 minutes ago
    hash: "0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234",
    confirmations: 2,
    networkFee: 0.001,
    speed: "slow",
  },
]

export const networks: Network[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    icon: "ethereum",
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    icon: "bitcoin",
  },
  {
    id: "solana",
    name: "Solana",
    icon: "solana",
  },
  {
    id: "polygon",
    name: "Polygon",
    icon: "polygon",
  },
  {
    id: "binance",
    name: "Binance Smart Chain",
    icon: "binance",
  },
]

export const currencies: Currency[] = [
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
  },
  {
    code: "EUR",
    symbol: "€",
    name: "Euro",
  },
  {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
  },
  {
    code: "JPY",
    symbol: "¥",
    name: "Japanese Yen",
  },
  {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
  },
]

export const walletAddress = "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"

