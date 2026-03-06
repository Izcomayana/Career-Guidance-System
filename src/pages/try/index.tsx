"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { careerRules, skills, subjects } from "./sys"
import Footer from "@/components/footer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command"
import { Check, ChevronsUpDown, Brain, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

interface FormData {
  gpa: string
  course: string
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
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState<"form" | "result">("form")

  const [formData, setFormData] = useState<FormData>({
    gpa: "",
    course: "",
    skill: ""
  })

  const [result, setResult] = useState<CareerMatch[]>([])
  const [openCourse, setOpenCourse] = useState(false)
  const [openSkill, setOpenSkill] = useState(false)

  const isFormValid =
    formData.gpa && formData.course && formData.skill

  const matchCareers = (): CareerMatch[] => {
    const { course, skill, gpa } = formData

    return careerRules
      .map(rule => {
        let score = 0
        const reasons: string[] = []

        if (rule.subjects.includes(course)) {
          score += 2
          reasons.push(`${course} is highly relevant`)
        }

        if (rule.skills.includes(skill)) {
          score += 2
          reasons.push(`${skill} is required for this career`)
        }

        if (gpa === "4.5 – 5.0") score += 1
        else if (gpa === "3.5 – 4.4") score += 0.5

        const maxScore = rule.subjects.length * 2 + rule.skills.length * 2 + 1
        const match = Math.min(Math.round((score / maxScore) * 100), 100)

        return { ...rule, match, reasons }
      })
      .sort((a, b) => b.match - a.match)
      .slice(0, 3)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      const recommendation = matchCareers()

      setResult(recommendation)
      setLoading(false)
      setView("result")
    }, 3000)
  }

  const handleTryAgain = () => {
    setFormData({ gpa: "", course: "", skill: "" })
    setResult([])
    setView("form")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 backdrop-blur bg-white/90">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          <div className="font-semibold text-indigo-900">
            Career Guidance System
          </div>

          <div className="hidden md:flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/try">Try System</Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/try">Try System</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* HEADER */}

      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-900">
          Try Career Guidance System
        </h1>
        <p className="text-gray-600 mt-2">
          Provide your academic and skill information.
        </p>
      </section>

      {/* FORM */}
      {view === "form" && (
        <section className="px-4 pb-16 relative">

          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center z-50">
              <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">
                Analyzing your profile...
              </p>
            </div>
          )}

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* GPA */}
              <div>
                <label className="font-semibold text-gray-700">
                  GPA Range
                </label>

                <Select
                  value={formData.gpa}
                  onValueChange={(value) =>
                    setFormData({ ...formData, gpa: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select GPA" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select GPA</SelectLabel>
                      <SelectItem value="1.0 – 2.4">1.0 – 2.4</SelectItem>
                      <SelectItem value="2.5 – 3.4">2.5 – 3.4</SelectItem>
                      <SelectItem value="3.5 – 4.4">3.5 – 4.4</SelectItem>
                      <SelectItem value="4.5 – 5.0">4.5 – 5.0</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* COURSE */}
              <div>
                <label className="font-semibold text-gray-700">
                  Course
                </label>

                <Popover open={openCourse} onOpenChange={setOpenCourse}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {formData.course || "Select course"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search course..." />
                      <CommandEmpty>No course found.</CommandEmpty>

                      <CommandGroup className="max-h-64 overflow-y-auto">
                        {subjects.map((course) => (
                          <CommandItem
                            key={course}
                            value={course}
                            onSelect={() => {
                              setFormData({ ...formData, course })
                              setOpenCourse(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                formData.course === course
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {course}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* SKILL */}
              <div>
                <label className="font-semibold text-gray-700">
                  Primary Skill
                </label>

                <Popover open={openSkill} onOpenChange={setOpenSkill}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {formData.skill || "Select skill"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search skill..." />
                      <CommandEmpty>No skill found.</CommandEmpty>

                      <CommandGroup className="max-h-64 overflow-y-auto">
                        {skills.map((skill) => (
                          <CommandItem
                            key={skill}
                            value={skill}
                            onSelect={() => {
                              setFormData({ ...formData, skill })
                              setOpenSkill(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                formData.skill === skill
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {skill}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg disabled:bg-gray-300"
              >
                Generate Recommendation
              </button>
            </form>
          </div>
        </section>
      )}

      {/* RESULTS */}

      {view === "result" && (
        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {result.map((career, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-3">
                    <Briefcase className="text-indigo-600 w-6 h-6" />

                    <h2 className="font-bold text-indigo-900 text-lg">
                      #{index + 1} {career.career}
                    </h2>
                  </div>

                  <span className="text-indigo-600 font-semibold text-lg">
                    {career.match}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full mb-5">
                  <div
                    className="bg-indigo-600 h-3 rounded-full transition-all"
                    style={{ width: `${career.match}%` }}
                  />
                </div>

                {/* reasons */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-indigo-600" />
                    Why this matches you
                  </h3>

                  <ul className="text-gray-600 space-y-1">
                    {career.reasons.map((reason, i) => (
                      <li key={i}>• {reason}</li>
                    ))}
                  </ul>
                </div>

                {/* alternatives */}
                {career.alternatives?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Related Careers
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {career.alternatives.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
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
        </section>
      )}

      <Footer />
    </div>
  )
}