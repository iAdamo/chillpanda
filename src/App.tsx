
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./screens/components/Homescreen"; // Ensure the file exists at this path
import Airdrop from "./screens/components/Airdrop";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";

import Footer from "./components/layout/Footer";

function MainApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      <Hero />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
