import { Card } from "@/components/ui/card";
import { Lightbulb, Users } from "lucide-react";

export default function () {
  return (
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
  )
}