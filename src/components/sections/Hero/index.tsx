import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Brain, Target } from "lucide-react";

export default function Hero() {
  return (
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
  )
}