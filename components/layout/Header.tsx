// import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  // const router = useRouter();
  return (
    <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">🐼</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ChilledPanda
            </h1>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/airdrop" className="hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link
              href="/"
              className="hover:text-green-400 transition-colors"
            >
              Airdrop
            </Link>
            <Link href="/app" className="hover:text-green-400 transition-colors">
              Main App
            </Link>
            <a href="/about" className="hover:text-green-400 transition-colors">
              About
            </a>
            <a
              href="#invest"
              className="hover:text-green-400 transition-colors"
            >
              Why Invest
            </a>
            <a
              href="#presale"
              className="hover:text-green-400 transition-colors"
            >
              Presale
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
