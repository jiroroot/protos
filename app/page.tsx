import { ArrowRight, Code, Zap, Shield, Globe, Star, Users, Rocket } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ChartDemo } from "@/components/ChartDemo"
import { VennDemo } from "@/components/VennDemo"

export default function Home() {
  // Test comment for Git workflow
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600"></div>
              <span className="text-xl font-bold text-gray-900">Protos</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="/components" className="text-gray-600 hover:text-gray-900 transition-colors">Components</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Powerful
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Node.js</span>
              <br />
              Applications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protos is a modern Node.js framework that helps you build scalable, 
              performant applications with ease. Get started in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Accordion Hero */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Why Developers Choose Protos
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <span>Lightning Fast Performance</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Built on top of the latest Node.js features with optimized performance, 
                      minimal overhead, and blazing-fast startup times. Our framework is designed 
                      to handle high-traffic applications with ease.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span>Enterprise-Grade Security</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Built-in security features, comprehensive authentication, authorization, 
                      and data validation. Production-ready with enterprise security standards 
                      and compliance requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Code className="h-5 w-5 text-purple-600" />
                      <span>Developer Experience First</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Intuitive APIs, excellent TypeScript support, comprehensive documentation, 
                      and a vibrant community. Get started in minutes with our step-by-step 
                      guides and examples.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Rocket className="h-5 w-5 text-orange-600" />
                      <span>Scalable Architecture</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Microservices-ready architecture, horizontal scaling, load balancing, 
                      and cloud-native design. Deploy anywhere from small startups to 
                      enterprise-scale applications.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Chart Section */}
          <div className="max-w-4xl mx-auto">
            <ChartDemo />
          </div>

          {/* Venn Diagram Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <VennDemo />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Modern Development
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build production-ready Node.js applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TypeScript First</h3>
              <p className="text-gray-600">
                Full TypeScript support with intelligent autocomplete, type safety, 
                and compile-time error checking.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Active Community</h3>
              <p className="text-gray-600">
                Join thousands of developers in our community. Get help, share knowledge, 
                and contribute to the ecosystem.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Ready</h3>
              <p className="text-gray-600">
                Deploy anywhere - AWS, Google Cloud, Azure, or your own infrastructure. 
                Built for modern cloud-native applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Active Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Built-in Features</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with Protos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600"></div>
                <span className="text-xl font-bold">Protos</span>
              </div>
              <p className="text-gray-400">
                Building the future of Node.js development
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Protos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}