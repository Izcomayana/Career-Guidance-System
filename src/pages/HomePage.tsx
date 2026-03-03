import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CheckCircle,
  Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import Background from "@/components/sections/Background"
import Hero from "@/components/sections/Hero"
import Methodology from "@/components/sections/Methodology"
import ExpectedResult from "@/components/sections/ExpectedResult"
import AimSection from "@/components/sections/Aim"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 backdrop-blur bg-white/90">
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="font-semibold text-base md:text-lg text-indigo-900">
            Career Guidance System
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/try" className="nav-link">Try System</Link>
          </div>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 px-4">
              <div className="flex flex-col gap-6 mt-10">
                <Link to="/" className="mobile-link">Home</Link>
                <Link to="/about" className="mobile-link">About</Link>
                <Link to="/try" className="mobile-link">Try System</Link>

                <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
                  Try Career Guidance
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Background to the Study */}
      <Background />

      {/* Problem Statement */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Problem Statement</h2>
          <Card className="max-w-3xl mx-auto p-6 md:p-8 bg-gray-100 border-l-4 border-indigo-600 shadow-sm transition-all duration-300 hover:shadow-lg">
            <p className="text-base md:text-lg text-center text-gray-700 mb-6 md:mb-8 italic leading-relaxed">
              "Many students struggle to choose suitable careers due to lack of guidance, leading to dissatisfaction and
              underemployment."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="text-center transition-transform duration-300 hover:scale-110">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300 hover:bg-red-200">
                  <span className="text-2xl">⚠️</span>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-700">Career mismatch</p>
              </div>
              <div className="text-center transition-transform duration-300 hover:scale-110">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300 hover:bg-orange-200">
                  <span className="text-2xl">😞</span>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-700">Low job satisfaction</p>
              </div>
              <div className="text-center transition-transform duration-300 hover:scale-110">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300 hover:bg-yellow-200">
                  <span className="text-2xl">💔</span>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-700">Wasted potential</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Aim & Objectives */}
      <AimSection />

      {/* Justification / Significance */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Justification & Significance
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                This system addresses a critical need in higher education by providing evidence-based career guidance
                that can significantly improve student outcomes and employability.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 p-3 md:p-4 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 hover:shadow-md">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700">Helps students make informed career decisions</p>
              </div>
              <div className="flex items-start gap-3 p-3 md:p-4 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 hover:shadow-md">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700">Reduces career mismatch and dissatisfaction</p>
              </div>
              <div className="flex items-start gap-3 p-3 md:p-4 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 hover:shadow-md">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700">Improves long-term employability prospects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <Methodology />

      {/* Expected Result & Contribution */}
      <ExpectedResult />

      {/* Call to Action */}
      <section id="try" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-balance">
            Discover a career path that matches your strengths.
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-indigo-100 max-w-2xl mx-auto">
            Get personalized career recommendations based on your academic performance and skills.
          </p>
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100 rounded-xl text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl w-full sm:w-auto"
          >
            Try Career Guidance System
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 md:py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-2">
          <div className="text-base md:text-lg font-semibold text-white">Career Guidance System</div>
          <div className="text-xs md:text-sm">Ilerioluwa Banjo</div>
          <div className="text-xs md:text-sm">Department of Computer Science</div>
          <div className="text-xs md:text-sm">Hallmark University</div>
          <div className="text-xs md:text-sm mt-4 text-gray-500">Final Year Project</div>
        </div>
      </footer>
    </div>
  )
}
