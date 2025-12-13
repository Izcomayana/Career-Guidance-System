// src/App.tsx
import type { ReactNode } from "react"
import HomePage from "./pages/HomePage"

type AppProps = {
  children?: ReactNode
}

export default function App({ children }: AppProps) {
  return (
    <div
      className="font-sans"
      style={{
        fontFamily: "Inter, Poppins, system-ui, sans-serif",
      }}
    >
      {children ?? <HomePage />}
    </div>
  )
}