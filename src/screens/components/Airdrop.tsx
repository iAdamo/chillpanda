import React from "react";
import { Gift, Users, Clock, CheckCircle, Shield } from "lucide-react";

const Airdrop: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              $CPANDA
            </span>
            <br />
            AIRDROP
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Claim your free ChilledPanda tokens! Limited time offer for early
            supporters.
          </p>
        </div>

        {/* Airdrop Card */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Claim Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Claim Your Tokens</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your wallet address"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">You qualify for:</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-400">
                    500 $CPANDA
                  </p>
                  <p className="text-sm text-gray-300 mt-1">~$25 USD Value</p>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  CLAIM AIRDROP
                </button>
              </div>
            </div>

            {/* Right Side - Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Airdrop Details</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center">
                    <Gift className="w-5 h-5 text-yellow-400 mr-2" />
                    <span>Total Airdrop Pool</span>
                  </div>
                  <span className="font-bold">5,000,000 $CPANDA</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-400 mr-2" />
                    <span>Participants</span>
                  </div>
                  <span className="font-bold">12,458</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-red-400 mr-2" />
                    <span>Time Remaining</span>
                  </div>
                  <span className="font-bold">7 Days</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                <h4 className="font-bold mb-2">How to Participate:</h4>
                <ol className="text-sm space-y-2 text-gray-300">
                  <li>1. Connect your wallet</li>
                  <li>2. Complete social tasks</li>
                  <li>3. Verify your account</li>
                  <li>4. Claim your tokens</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold mb-2">Instant Distribution</h4>
            <p className="text-sm text-gray-400">
              Tokens distributed immediately after verification
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="font-bold mb-2">Secure & Safe</h4>
            <p className="text-sm text-gray-400">
              No private keys required, completely secure process
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-bold mb-2">Limited Spots</h4>
            <p className="text-sm text-gray-400">
              Only 10,000 spots available, first come first serve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
