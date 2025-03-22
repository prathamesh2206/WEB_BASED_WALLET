"use client";
import Header from "@/components/wallet/Header";
import TokenList from "@/components/wallet/TokenList";
import TransactionHistory from "@/components/wallet/transaction-history";
import WalletOverview from "@/components/wallet/Wallet";
import React, { useState } from "react";
import type { Transaction } from "@/lib/types";
import TransactionModal from "@/components/wallet/transaction-modal";
import MobileNavigation from "@/components/wallet/mobile-navigation";

const Wallet = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsTransactionModalOpen(true);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <WalletOverview />
        <div className="hidden md:flex border-b border-border mb-6 mt-8">
          <button
            onClick={() => setActiveSection("overview")}
            className={`px-4 py-2 font-medium ${
              activeSection === "overview"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveSection("tokens")}
            className={`px-4 py-2 font-medium ${
              activeSection === "tokens"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Tokens
          </button>
          <button
            onClick={() => setActiveSection("transactions")}
            className={`px-4 py-2 font-medium ${
              activeSection === "transactions"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Transactions
          </button>
        </div>
        <div className="  mt-2 md:block">
          {(activeSection === "overview" || activeSection === "tokens") && (
            <TokenList />
          )}

          {(activeSection === "overview" ||
            activeSection === "transactions") && (
            <TransactionHistory onTransactionClick={handleTransactionClick} />
          )}
        </div>
      </main>
      <MobileNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {selectedTransaction && (
        <TransactionModal
          transaction={selectedTransaction}
          isOpen={isTransactionModalOpen}
          onClose={() => setIsTransactionModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Wallet;
