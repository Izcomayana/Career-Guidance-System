export default function () {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 sm:mb-12 text-center">
          Methodology
        </h2>

        {/* Steps */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
              1
            </div>
            <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-2 sm:mb-3">Data Collection</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Academic records (GPA, course grades, major)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Skill assessment survey (technical, soft skills, interests)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
              2
            </div>
            <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-2 sm:mb-3">Data Processing</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Weighted scoring based on academic and skill metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Rule-based logic to match profiles with career paths</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
              3
            </div>
            <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-2 sm:mb-3">Career Recommendation</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Generate personalized career recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Display best-fit career output with confidence scores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-indigo-50 p-6 sm:p-8 rounded-lg border-2 border-indigo-200">
          <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-4">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white text-indigo-900 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              React
            </span>
            <span className="px-4 py-2 bg-white text-indigo-900 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-white text-indigo-900 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              Next.js
            </span>
            <span className="px-4 py-2 bg-white text-indigo-900 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-white text-indigo-900 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              Web-based Interface
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}