import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import Background from "@/components/sections/Background"
import Hero from "@/components/sections/Hero"
import AimSection from "@/components/sections/Aim"
import Nav from "@/components/nav"
import ProblemStatement from "@/components/sections/problem"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Background to the Study */}
      <Background />

      {/* Problem Statement */}
      <ProblemStatement />

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

      {/* Call to Action */}
      <section id="try" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-balance">
            Discover a career path that matches your strengths.
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-indigo-100 max-w-2xl mx-auto">
            Get personalized career recommendations based on your academic performance and skills.
          </p>
          <Link to="/try" className="cursor-pointer">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 rounded-xl text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl w-full sm:w-auto"
            >
              Try Career Guidance System
            </Button>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
