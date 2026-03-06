"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { careerRules, skills, subjects } from "./sys"

interface FormData {
  gpa: string
  subject: string
  skill: string
}

interface CareerMatch {
  career: string
  subjects: string[]
  skills: string[]
  alternatives: string[]
  match: number
  reasons: string[]
}

export default function TrySystemPage() {
  const [view, setView] = useState<"form" | "result">("form")
  const [formData, setFormData] = useState<FormData>({
    gpa: "",
    subject: "",
    skill: "",
  })
  const [result, setResult] = useState<CareerMatch[]>([])

  const isFormValid = formData.gpa && formData.subject && formData.skill

  const matchCareers = (): CareerMatch[] => {

    const { subject, skill, gpa } = formData

    return careerRules
      .map(rule => {

        let score = 0
        const reasons: string[] = []

        if (rule.subjects.includes(subject)) {
          score += 2
          reasons.push(`Your subject (${subject}) aligns with this career`)
        }

        if (rule.skills.includes(skill)) {
          score += 2
          reasons.push(`Your skill (${skill}) is important for this role`)
        }

        if (gpa === "4.5 – 5.0") {
          score += 1
          reasons.push("Your strong GPA supports this career path")
        }

        const match = Math.round((score / 5) * 100)

        return {
          ...rule,
          match,
          reasons
        }

      })
      .sort((a, b) => b.match - a.match)
      .slice(0, 3)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const recommendation = matchCareers()
    setResult(recommendation)
    setView("result")
  }

  const handleTryAgain = () => {
    setFormData({ gpa: "", subject: "", skill: "" })
    setResult([])
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
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  >
                    <option value="">Select subject</option>

                    {subjects.map(subject => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}

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
                    {skills.map(skill => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
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
      {view === "result" && result.length > 0 && (

        <section className="px-4 pb-16 sm:pb-20">

          <div className="max-w-5xl mx-auto space-y-8">

            {result.map((career, index) => (

              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-indigo-900 mb-2">
                  {index + 1}️⃣ {career.career}
                </h2>

                <p className="text-teal-600 font-semibold mb-4">
                  {career.match}% Match
                </p>

                <h4 className="font-semibold mb-2">Why this fits you:</h4>

                <ul className="mb-4 list-disc list-inside">

                  {career.reasons.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}

                </ul>

                <h4 className="font-semibold mb-2">Alternative Careers:</h4>

                <ul className="list-disc list-inside">

                  {career.alternatives.map((alt, i) => (
                    <li key={i}>{alt}</li>
                  ))}

                </ul>

              </div>

            ))}

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
