import { Target } from "lucide-react";

export default function AimSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
          Aim & Objectives
        </h2>

        {/* Aim */}
        <div className="bg-indigo-900 text-white p-6 sm:p-8 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-start gap-3 sm:gap-4">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Aim</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                To develop a computerized system that provides personalized career guidance to students based on their
                academic performance and skill assessments.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-6">Objectives</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                1
              </span>
              <p className="text-sm sm:text-base text-gray-700 mt-1 sm:mt-2">
                Analyze academic and skill data to identify student strengths and competencies
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                2
              </span>
              <p className="text-sm sm:text-base text-gray-700 mt-1 sm:mt-2">
                Recommend suitable career paths that align with individual student profiles
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                3
              </span>
              <p className="text-sm sm:text-base text-gray-700 mt-1 sm:mt-2">
                Provide actionable feedback to improve career readiness and preparedness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}