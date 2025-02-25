
import { ArrowRight, Box, Zap, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:pt-48 lg:pb-32">
        <div className="container mx-auto text-center">
          <span className="inline-block animate-fade-down px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gray-100">
            Introducing Our Platform
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight animate-fade-up">
            Create beautiful experiences
            <br className="hidden lg:block" /> with minimal effort
          </h1>
          <p className="mt-6 text-lg text-gray-600 animate-fade-up">
            Transform your ideas into reality with our intuitive platform.
            <br className="hidden lg:block" /> Start building something amazing today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
            <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="mt-4 text-gray-600">
              Our platform provides all the tools you need to bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Box className="w-6 h-6" />}
              title="Intuitive Design"
              description="Create stunning designs with our easy-to-use interface and powerful tools."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Experience incredible performance with our optimized platform."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Built-in Security"
              description="Rest easy knowing your data is protected with enterprise-grade security."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">&copy; 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
