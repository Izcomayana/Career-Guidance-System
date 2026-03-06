import { AlertCircle } from "lucide-react";

export default function ProblemStatement() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
          Statement of the Problem
        </h2>
        <div className="bg-white border-l-4 border-indigo-600 p-6 sm:p-8 rounded-r-lg shadow-md">
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6">
            Many students face challenges in selecting suitable career paths due to inadequate guidance and limited
            awareness of their academic strengths and skills.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-gray-700">
                Students often lack access to personalized career counseling resources
              </span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-gray-700">
                Limited understanding of how academic performance correlates with career suitability
              </span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-gray-700">
                Absence of data-driven tools to support informed career decision-making
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}