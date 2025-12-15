// src/App.tsx
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import AboutPage from "./pages/about"
import TrySystemPage from "./pages/try"

export default function App() {
  return (
    <div
      className="font-sans"
      style={{
        fontFamily: "Inter, Poppins, system-ui, sans-serif",
      }}
    >
          <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/try" element={<TrySystemPage />} />
    </Routes>
    </div>
  )
}