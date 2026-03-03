import { Card } from "@/components/ui/card";

export default function AimSection() {
  return (
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
  )
}