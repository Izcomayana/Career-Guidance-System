"use client"

import {
  BookOpen,
  User,
  Building2,
  Laptop,
  Lightbulb,
  FlaskConical,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import Nav from "@/components/nav"
import ProblemStatement from "@/components/sections/problem"
import AimSection from "@/components/sections/Aim"
import Methodology from "@/components/sections/Methodology"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Nav />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4 animate-fade-in">
            About the Project
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            An overview of the Career Guidance System, its methodology, and scope.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Description */}
            <div className="flex flex-col justify-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The <span className="font-semibold text-indigo-900">Career Guidance System</span> is a web-based
                platform designed to assist students at Hallmark University in making informed career decisions. By
                analyzing academic performance and skill assessments, the system provides personalized career
                recommendations that align with individual strengths and interests, helping students navigate their
                professional journey with confidence.
              </p>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-1 text-sm sm:text-base">Project Title</h3>
                    <p className="text-sm sm:text-base text-gray-600">Career Guidance System</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-1 text-sm sm:text-base">Prepared By</h3>
                    <p className="text-sm sm:text-base text-gray-600">Ilerioluwa Banjo</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-1 text-sm sm:text-base">
                      Department & Institution
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">Department of Computer Science</p>
                    <p className="text-sm sm:text-base text-gray-600">Hallmark University</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-1 text-sm sm:text-base">Technology Used</h3>
                    <p className="text-sm sm:text-base text-gray-600">React, TypeScript, Next.js, Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of the Problem */}
      <ProblemStatement />

      {/* Aim & Objectives */}
      <AimSection />

      {/* Research Questions & Hypothesis */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
            Research Questions & Hypothesis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Research Questions */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-t-4 border-indigo-600">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-4 sm:mb-6">Research Questions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-indigo-700 text-sm sm:text-base mb-2">Question 1</p>
                  <p className="text-sm sm:text-base text-gray-700">
                    How can academic performance data be effectively utilized to recommend suitable career paths?
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-indigo-700 text-sm sm:text-base mb-2">Question 2</p>
                  <p className="text-sm sm:text-base text-gray-700">
                    What factors contribute to the accuracy of data-driven career guidance systems?
                  </p>
                </div>
              </div>
            </div>

            {/* Hypothesis */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-t-4 border-teal-600">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-4 sm:mb-6">Hypothesis</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-teal-700 text-sm sm:text-base mb-2">H₀ (Null Hypothesis)</p>
                  <p className="text-sm sm:text-base text-gray-700">
                    There is no significant relationship between academic performance and suitable career
                    recommendations.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-teal-700 text-sm sm:text-base mb-2">H₁ (Alternative Hypothesis)</p>
                  <p className="text-sm sm:text-base text-gray-700">
                    There is a significant relationship between academic performance and suitable career
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <Methodology />

      {/* Scope and Limitation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
            Scope & Limitation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Scope */}
            <div className="bg-teal-50 p-6 sm:p-8 rounded-lg border-2 border-teal-200 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-teal-900 mb-4 sm:mb-6">Scope</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Focuses exclusively on Hallmark University students
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Utilizes academic performance and skill assessment data only
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Provides data-driven career recommendations and guidance
                  </span>
                </li>
              </ul>
            </div>

            {/* Limitations */}
            <div className="bg-amber-50 p-6 sm:p-8 rounded-lg border-2 border-amber-200 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 sm:mb-6">Limitations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Does not include psychological or personality factors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Limited to available dataset from Hallmark University
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Operates as a prototype-level system for demonstration purposes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Contribution to Knowledge */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
            Expected Contribution to Knowledge
          </h2>
          <div className="bg-gradient-to-br from-indigo-50 to-teal-50 p-6 sm:p-8 rounded-lg shadow-lg border-2 border-indigo-200">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900">Key Contributions</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Integrates modern technology into traditional career guidance processes, bridging the gap between
                  academic achievement and career planning
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Serves as a replicable model for other educational institutions seeking to implement data-driven
                  career guidance systems
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Supports informed decision-making by providing students with objective, evidence-based career
                  recommendations
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expected Result / Conclusion */}
      <section className="py-12 sm:py-16 lg:py-20 bg-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Expected Result</h2>
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-lg border-2 border-white/20">
            <FlaskConical className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-teal-300" />
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              The system is expected to provide accurate and data-driven career recommendations that help students make
              confident career decisions. By leveraging academic performance data and skill assessments, students will
              gain valuable insights into career paths that align with their strengths, ultimately leading to better
              career satisfaction and success.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
