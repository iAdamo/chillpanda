const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-4xl">
          🐼
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          What is{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            ChilledPanda
          </span>
          ?
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          ChilledPanda is a digital currency powered by artificial intelligence
          for optimized trading, security, and decentralized decision-making.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Why It's Good:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Smarter automation (trading, governance)
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Fraud detection and enhanced security
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Efficient scalability through AI-managed networks
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Data-driven improvements over time
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              AI-Powered Features
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Intelligent Trading Algorithms</li>
              <li>• Automated Risk Management</li>
              <li>• Predictive Market Analysis</li>
              <li>• Decentralized AI Governance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
