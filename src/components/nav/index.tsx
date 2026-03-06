import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 backdrop-blur bg-white/90">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <div className="font-semibold text-base md:text-lg text-indigo-900">
            Career Guidance System
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/try" className="nav-link">Try System</Link>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 px-4">
            <div className="flex flex-col gap-6 mt-10">
              <Link to="/" className="mobile-link">Home</Link>
              <Link to="/about" className="mobile-link">About</Link>
              <Link to="/try" className="mobile-link">Try System</Link>

              <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
                Try Career Guidance
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}