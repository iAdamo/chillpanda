"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { WalletConnect } from "@/components/WalletConnect";
import PresaleStats from "@/components/PresaleStats";
import InvestmentForm from "@/components/InvestmentForm";
import InvestmentHistory from "@/components/InvestmentHistory";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(
    "0x742E4d6c15f4cE4e6E20D8B5310034e77d0eDd99"
  );
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleInvestment = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Head>
        <title>ChilledPanda - AI-Powered Digital Currency</title>
        <meta
          name="description"
          content="ChilledPanda - Smarter automation, enhanced security, efficient scalability"
        />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Replace with your actual logo */}
              <Image
                src="/chilledpanda_logo.jpg"
                alt="ChilledPanda Logo"
                width={500}
                height={500}
                className="rounded-full md:h-12 md:w-12 h-8 w-8"
              />
              {/* <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div> */}
              <h1 className="md:text-2xl text-base font-bold text-gray-800">ChilledPanda</h1>
            </div>
            <WalletConnect onAddressChange={setWalletAddress} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              AI-Powered
            </span>{" "}
            Currency
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smarter automation, enhanced security, and efficient scalability
            through AI-managed networks
          </p>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Sections 1 & 2 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1: What is ChilledPanda */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                What is ChilledPanda?
              </h2>
              <p className="text-gray-600 mb-4">
                ChilledPanda is a digital currency powered by artificial
                intelligence for optimized trading, security, and decentralized
                decision-making.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    🚀 Smarter Automation
                  </h3>
                  <p className="text-sm text-green-700">
                    AI-driven trading and governance systems
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    🛡️ Enhanced Security
                  </h3>
                  <p className="text-sm text-blue-700">
                    Advanced fraud detection and protection
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    ⚡ Efficient Scalability
                  </h3>
                  <p className="text-sm text-purple-700">
                    AI-managed networks for optimal performance
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    📊 Data-Driven
                  </h3>
                  <p className="text-sm text-orange-700">
                    Continuous improvements through machine learning
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Why Invest */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Why Invest in ChilledPanda?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[
                    "🔒 Team tokens locked for 2 years",
                    "🔒 Liquidity locked for 1000 days",
                    "💰 Holders will be rewarded",
                    "📱 Game app planned for future",
                    "🤖 AI based utilities",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "🔥 Auto-burn mechanism",
                    "🛡️ Audit after presale",
                    "❌ No private sale",
                    "📈 Major CEX listing coming",
                    "🌎 Trending worldwide",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Investment Section */}
          <div className="space-y-8">
            <PresaleStats />
            <InvestmentForm
              address={walletAddress}
              onInvestment={handleInvestment}
            />
          </div>
        </div>
        {/* Section 4: Tokenomics */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">10B</div>
              <div className="text-gray-600">Total Supply</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">1B</div>
              <div className="text-gray-600">Team Tokens</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">1B</div>
              <div className="text-gray-600">Pre-sale Tokens</div>
            </div>
          </div>
        </section>
        {/* Investment History */}
        {walletAddress && (
          <InvestmentHistory
            address={walletAddress}
            refreshTrigger={refreshTrigger}
          />
        )}
        {/* Section 5: Disclaimer */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-yellow-800">
            Important Disclaimer
          </h2>
          <div className="space-y-3 text-sm text-yellow-700 leading-relaxed">
            <p>
              <strong>
                ChilledPanda ($CPANDA) is a decentralized digital asset project
                that may involve significant financial risk.
              </strong>
              This content is for informational purposes only and does not
              constitute financial, investment, legal, or tax advice.
              Cryptocurrency markets are highly volatile, and past performance
              is not indicative of future results.
            </p>

            <p>
              <strong>
                Always conduct your own research (DYOR) and consult with a
                licensed financial advisor
              </strong>{" "}
              before making any investment decisions. ChilledPanda makes no
              guarantees about the value, utility, or future success of its
              token or platform.
            </p>

            <p>
              <strong>
                By engaging with ChilledPanda, you acknowledge that you
                understand the risks involved
              </strong>{" "}
              and take full responsibility for your participation. These risks
              include, but are not limited to:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Complete loss of invested capital</li>
              <li>Market volatility and liquidity risks</li>
              <li>Regulatory changes and legal uncertainties</li>
              <li>Technology risks including smart contract vulnerabilities</li>
              <li>Project development risks and timeline uncertainties</li>
            </ul>

            <p className="font-semibold">
              Invest only what you can afford to lose. Cryptocurrency
              investments are inherently risky and may not be suitable for all
              investors.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ChilledPanda</h3>
              <p className="text-gray-400 text-sm">
                AI-powered digital currency for optimized trading, security, and
                decentralized decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Project Wallet</h3>
              <p className="text-xs text-gray-400 break-all font-mono">
                {process.env.NEXT_PUBLIC_WALLET_ADDRESS}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 ChilledPanda. All rights reserved. |
              <a href="#" className="hover:text-white ml-2 transition-colors">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-white ml-2 transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
