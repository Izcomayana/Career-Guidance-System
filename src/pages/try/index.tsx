"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface FormData {
  gpa: string
  subject: string
  skill: string
}

interface Result {
  career: string
  confidence: "High" | "Medium" | "Low"
  reasons: string[]
  alternatives: string[]
}

export default function TrySystemPage() {
  const [view, setView] = useState<"form" | "result">("form")
  const [formData, setFormData] = useState<FormData>({
    gpa: "",
    subject: "",
    skill: "",
  })
  const [result, setResult] = useState<Result | null>(null)

  const isFormValid = formData.gpa && formData.subject && formData.skill

  const generateRecommendation = (): Result => {
    // Simple rule-based logic
    const { gpa, subject, skill } = formData

    let career = "Software Engineer"
    let confidence: "High" | "Medium" | "Low" = "Medium"
    const reasons: string[] = []
    let alternatives: string[] = []

    // Career determination logic
    if (skill === "Programming") {
      if (subject === "Computer Science" || subject === "Mathematics") {
        career = "Software Engineer"
        confidence = gpa === "3.5 – 4.4" || gpa === "4.5 – 5.0" ? "High" : "Medium"
        alternatives = ["Data Engineer", "Systems Analyst", "DevOps Engineer"]
      } else {
        career = "Web Developer"
        confidence = "Medium"
        alternatives = ["Software Engineer", "Mobile Developer", "UI Developer"]
      }
    } else if (skill === "Data Analysis") {
      career = "Data Analyst"
      confidence = subject === "Mathematics" || subject === "Computer Science" ? "High" : "Medium"
      alternatives = ["Business Analyst", "Data Scientist", "Research Analyst"]
    } else if (skill === "Problem Solving") {
      career = "Systems Analyst"
      confidence = "Medium"
      alternatives = ["Business Consultant", "Operations Analyst", "Project Manager"]
    } else if (skill === "Design / Creativity") {
      career = "UX/UI Designer"
      confidence = subject === "Arts / Social Sciences" ? "High" : "Medium"
      alternatives = ["Product Designer", "Graphic Designer", "Creative Director"]
    } else if (skill === "Communication") {
      career = "Technical Writer"
      confidence = "Medium"
      alternatives = ["Product Manager", "Business Analyst", "Content Strategist"]
    }

    // Generate reasons
    if (gpa === "4.5 – 5.0" || gpa === "3.5 – 4.4") {
      reasons.push("Strong academic performance indicates high learning capability")
    } else if (gpa === "2.5 – 3.4") {
      reasons.push("Solid academic foundation with room for practical skill development")
    } else {
      reasons.push("Emphasis on practical skills and hands-on experience")
    }

    reasons.push(`High interest in ${skill.toLowerCase()} aligns with career requirements`)
    reasons.push(`Background in ${subject.toLowerCase()} provides relevant knowledge base`)

    if (confidence === "High") {
      reasons.push("Excellent match between your profile and career requirements")
    }

    return { career, confidence, reasons, alternatives }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const recommendation = generateRecommendation()
    setResult(recommendation)
    setView("result")
  }

  const handleTryAgain = () => {
    setFormData({ gpa: "", subject: "", skill: "" })
    setResult(null)
    setView("form")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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

      {/* Page Header - Always visible */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">
            Try Career Guidance System
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Provide your academic and skill information to receive a career recommendation.
          </p>
        </div>
      </section>

      {/* Form State */}
      {view === "form" && (
        <section className="px-4 pb-16 sm:pb-20 animate-slide-up">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* GPA Range */}
                <div className="space-y-2">
                  <label htmlFor="gpa" className="block text-sm font-semibold text-gray-700">
                    GPA Range
                  </label>
                  <select
                    id="gpa"
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  >
                    <option value="">Select your GPA range</option>
                    <option value="1.0 – 2.4">1.0 – 2.4</option>
                    <option value="2.5 – 3.4">2.5 – 3.4</option>
                    <option value="3.5 – 4.4">3.5 – 4.4</option>
                    <option value="4.5 – 5.0">4.5 – 5.0</option>
                  </select>
                </div>

                {/* Strongest Subject Area */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                    Strongest Subject Area
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  >
                    <option value="">Select your strongest subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Sciences">Sciences</option>
                    <option value="Arts / Social Sciences">Arts / Social Sciences</option>
                  </select>
                </div>

                {/* Primary Skill Interest */}
                <div className="space-y-2">
                  <label htmlFor="skill" className="block text-sm font-semibold text-gray-700">
                    Primary Skill Interest
                  </label>
                  <select
                    id="skill"
                    value={formData.skill}
                    onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  >
                    <option value="">Select your primary skill interest</option>
                    <option value="Programming">Programming</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Problem Solving">Problem Solving</option>
                    <option value="Design / Creativity">Design / Creativity</option>
                    <option value="Communication">Communication</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full py-4 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                >
                  Generate Recommendation
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Result State */}
      {view === "result" && result && (
        <section className="px-4 pb-16 sm:pb-20 animate-slide-up">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 text-center transition-all duration-300 hover:shadow-xl">
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    result.confidence === "High"
                      ? "bg-green-100 text-green-800"
                      : result.confidence === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {result.confidence} Confidence
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-2">Recommended Career</h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600 mb-6">{result.career}</p>
            </div>

            {/* Why This Career Fits You */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-6">Why This Career Fits You</h3>
              <ul className="space-y-4">
                {result.reasons.map((reason, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <svg
                      className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alternative Career Options */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-6">Alternative Career Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.alternatives.map((alt, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="font-semibold text-gray-800">{alt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTryAgain}
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8 px-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base text-indigo-200">
            © 2025 Career Guidance System. Academic Research Project.
          </p>
        </div>
      </footer>
    </div>
  )
}
