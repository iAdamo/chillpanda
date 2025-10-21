import React from "react";
import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Rocket,
  Coins,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-black to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl shadow-2xl shadow-green-500/30 animate-pulse">
                🐼
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                  LIVE
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              CHILLED
            </span>
            <span className="block text-white">PANDA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The World's First{" "}
            <span className="text-green-400 font-semibold">AI-Powered</span>{" "}
            Meme Token Revolutionizing{" "}
            <span className="text-blue-400 font-semibold">DeFi Trading</span> &
            <span className="text-purple-400 font-semibold">
              {" "}
              Automated Governance
            </span>
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-green-400">$12.5M</div>
              <div className="text-sm text-gray-400">Raised</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-blue-400">25%</div>
              <div className="text-sm text-gray-400">Progress</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-purple-400">50K+</div>
              <div className="text-sm text-gray-400">Holders</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">1500</div>
              <div className="text-sm text-gray-400">Tokens/$100</div>
            </div>
          </div>

          {/* CTA Buttons - FIXED SECTION */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/app"
              className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              BUY TOKENS NOW
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/airdrop"
              className="group border-2 border-white/20 hover:border-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center"
            >
              <Coins className="w-5 h-5 mr-2" />
              CLAIM AIRDROP
              <Star className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="group p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Trading</h3>
            <p className="text-gray-400">
              Advanced algorithms for automated trading and optimized returns
              with machine learning predictions.
            </p>
          </div>

          <div className="group p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure & Audited</h3>
            <p className="text-gray-400">
              Multi-layer security with smart contract audits and fraud
              detection systems.
            </p>
          </div>

          <div className="group p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Auto Rewards</h3>
            <p className="text-gray-400">
              Earn passive income through staking rewards and automatic token
              redistribution.
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Presale Progress</h3>
            <span className="text-green-400 font-bold">25% Complete</span>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: "25%" }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <span>Raised: $12,500,000</span>
            <span>Target: $50,000,000</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Presale ends in:</p>
          <div className="flex justify-center space-x-4 text-2xl font-mono">
            <div className="bg-white/5 rounded-lg p-3 min-w-16">
              <div className="text-green-400">15</div>
              <div className="text-xs text-gray-400">DAYS</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 min-w-16">
              <div className="text-blue-400">08</div>
              <div className="text-xs text-gray-400">HOURS</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 min-w-16">
              <div className="text-purple-400">42</div>
              <div className="text-xs text-gray-400">MINS</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 min-w-16">
              <div className="text-yellow-400">15</div>
              <div className="text-xs text-gray-400">SECS</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Trusted by 50,000+ investors worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <Users className="w-8 h-8" />
            <TrendingUp className="w-8 h-8" />
            <Shield className="w-8 h-8" />
            <Zap className="w-8 h-8" />
            <Star className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default HomeScreen;
