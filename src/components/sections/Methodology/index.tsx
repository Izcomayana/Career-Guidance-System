export default function () {
  return (
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
  )
}