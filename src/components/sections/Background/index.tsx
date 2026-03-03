import { Card } from "@/components/ui/card";
import { Award, Brain, Database } from "lucide-react";

export default function Background() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Background to the Study
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          <div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Career guidance is essential for students transitioning from university to the workforce. This system
              leverages academic records and skill assessments to provide personalized career recommendations, helping
              students make informed decisions about their professional future.
            </p>
          </div>
          <div className="grid gap-4">
            <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-indigo-100 rounded-lg transition-transform duration-300 group-hover:scale-110">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Academic Records</h3>
                  <p className="text-xs md:text-sm text-gray-600">Analyze GPA and course performance</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-teal-100 rounded-lg transition-transform duration-300 group-hover:scale-110">
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Skill Assessment</h3>
                  <p className="text-xs md:text-sm text-gray-600">Evaluate technical and soft skills</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 md:p-6 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-green-100 rounded-lg transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Career Recommendation</h3>
                  <p className="text-xs md:text-sm text-gray-600">Match profiles to suitable careers</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}