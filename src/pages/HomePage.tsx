import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CheckCircle,
  Target,
  Users,
  Lightbulb,
  Database,
  Brain,
  Award,
  Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#try" className="nav-link">Try System</a>
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
          <a href="#home" className="mobile-link">Home</a>
          <a href="#about" className="mobile-link">About</a>
          <a href="#try" className="mobile-link">Try System</a>

          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
            Try Career Guidance
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</nav>

           {/* Hero Section */}
                 <section id="home" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance leading-tight">
                Career Guidance System
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                A data-driven approach to helping university students choose suitable career paths.
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Prepared by Ilerioluwa Banjo
                <br />
                Department of Computer Science, Hallmark University
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  Try Career Guidance
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-indigo-600 text-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 bg-transparent transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  View Project Overview
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up">
              <Card className="p-4 md:p-6 space-y-4 bg-white shadow-lg rounded-xl max-w-sm sm:max-w-md w-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg transition-all duration-300 hover:bg-indigo-100 hover:scale-105">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-sm md:text-base text-gray-900">Career Match</div>
                      <div className="text-xs md:text-sm text-gray-600">Software Engineer - 95%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg transition-all duration-300 hover:bg-teal-100 hover:scale-105">
                    <Brain className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
                    <div>
                      <div className="font-semibold text-sm md:text-base text-gray-900">Skill Assessment</div>
                      <div className="text-xs md:text-sm text-gray-600">Programming: Excellent</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm md:text-base text-gray-900">GPA Summary</div>
                      <div className="text-xs md:text-sm text-gray-600">3.8 / 4.0</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Background to the Study */}
       <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Background to the Study
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
            <div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Career guidance is essential for students transitioning from university to the workforce. This system
                leverages academic records and skill assessments to provide personalized career recommendations, helping
                students make informed decisions about their professional future.
              </p>
            </div>
            <div className="grid gap-4">
              <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-indigo-100 rounded-lg transition-transform duration-300 group-hover:scale-110">
                    <Database className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Academic Records</h3>
                    <p className="text-xs md:text-sm text-gray-600">Analyze GPA and course performance</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-teal-100 rounded-lg transition-transform duration-300 group-hover:scale-110">
                    <Brain className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Skill Assessment</h3>
                    <p className="text-xs md:text-sm text-gray-600">Evaluate technical and soft skills</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-green-100 rounded-lg transition-transform duration-300 group-hover:scale-110">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Career Recommendation</h3>
                    <p className="text-xs md:text-sm text-gray-600">Match profiles to suitable careers</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
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
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Aim & Objectives</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 bg-indigo-50 shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  ★
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Aim</h3>
                  <p className="text-sm md:text-base text-gray-700">
                    To develop a computerized system that provides personalized career guidance.
                  </p>
                </div>
              </div>
            </Card>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-4 transition-all duration-300 group-hover:bg-teal-700 group-hover:scale-110">
                  1
                </div>
                <p className="text-sm md:text-base text-gray-700">Analyze academic results and skills</p>
              </Card>
              <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-4 transition-all duration-300 group-hover:bg-teal-700 group-hover:scale-110">
                  2
                </div>
                <p className="text-sm md:text-base text-gray-700">Recommend suitable career paths</p>
              </Card>
              <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-4 transition-all duration-300 group-hover:bg-teal-700 group-hover:scale-110">
                  3
                </div>
                <p className="text-sm md:text-base text-gray-700">Provide career improvement feedback</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Methodology</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl relative transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  1<div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-indigo-200 -z-10"></div>
                </div>
                <h3 className="font-semibold text-xs md:text-base text-gray-900 mb-1 md:mb-2">Data Collection</h3>
                <p className="text-xs md:text-sm text-gray-600">Gather academic records</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl relative transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  2<div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-indigo-200 -z-10"></div>
                </div>
                <h3 className="font-semibold text-xs md:text-base text-gray-900 mb-1 md:mb-2">Skill Assessment</h3>
                <p className="text-xs md:text-sm text-gray-600">Evaluate capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl relative transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  3<div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-indigo-200 -z-10"></div>
                </div>
                <h3 className="font-semibold text-xs md:text-base text-gray-900 mb-1 md:mb-2">Career Analysis</h3>
                <p className="text-xs md:text-sm text-gray-600">Match profiles</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  4
                </div>
                <h3 className="font-semibold text-xs md:text-base text-gray-900 mb-1 md:mb-2">Recommendation</h3>
                <p className="text-xs md:text-sm text-gray-600">Provide guidance</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm text-gray-700 border border-gray-200 transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                PHP
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm text-gray-700 border border-gray-200 transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                MySQL
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm text-gray-700 border border-gray-200 transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                Rule-based Logic
              </span>
            </div>
          </div>
        </div>
      </section>

            {/* Expected Result & Contribution */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Expected Result & Contribution
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 shadow-sm rounded-xl border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-300">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 transition-transform duration-300 hover:scale-110" />
                Expected Result
              </h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Intelligent career recommendations based on data</span>
                </li>
                <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Data-driven decision making for students</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 md:p-8 shadow-sm rounded-xl border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-teal-300">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-teal-600 transition-transform duration-300 hover:scale-110" />
                Contribution
              </h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Replicable model for educational institutions</span>
                </li>
                <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Technology-based career advisory framework</span>
                </li>
              </ul>
            </Card>
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
