"use client"

import { useRouter } from "next/navigation"
// Removed Lucide icons as we'll use placeholder images for more detailed visuals
// import { MessageCircle, Sparkles, MapPin } from 'lucide-react'

export function LandingPageNew() {
  const router = useRouter()

  const handleTryLejrr = () => {
    // Navigate to the travelers dashboard, showing the modal if no type is saved
    router.push("/?tab=travelers")
  }

  return (
    <div className="relative min-h-screen bg-blue-50 overflow-hidden">
      {/* Background Clouds - Updated with specific queries */}
      <img
        src="/placeholder.svg?height=200&width=400"
        alt="Cloud"
        className="absolute top-10 left-20 w-48 h-auto opacity-70"
      />
      <img
        src="/placeholder.svg?height=150&width=300"
        alt="Cloud"
        className="absolute top-0 right-40 w-36 h-auto opacity-70"
      />
      <img
        src="/placeholder.svg?height=180&width=350"
        alt="Cloud"
        className="absolute bottom-20 left-10 w-44 h-auto opacity-70"
      />
      <img
        src="/placeholder.svg?height=120&width=250"
        alt="Cloud"
        className="absolute bottom-0 right-20 w-32 h-auto opacity-70"
      />

      {/* Itinerary Images */}
      <img
        src="/itinerary_isla_grande.jpg"
        alt="Isla Grande Itinerary"
        className="absolute top-20 right-0 w-[400px] h-auto z-10 rounded-xl shadow-lg"
        style={{ transform: "rotate(5deg)" }}
      />
      <img
        src="/itinerary_rome.jpg"
        alt="Rome Itinerary"
        className="absolute bottom-40 left-0 w-[400px] h-auto z-10 rounded-xl shadow-lg"
        style={{ transform: "rotate(-5deg)" }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Lejrr</h1>
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Your Travel AI Copilot</h2>
          <button
            onClick={handleTryLejrr}
            className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Try Lejrr
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <img src="/placeholder.svg?height=200&width=200" alt="For Travelers" className="mx-auto mb-6 rounded-xl" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">For Travelers</h3>
            <p className="text-lg text-gray-700">Discover hidden gems</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <img src="/placeholder.svg?height=200&width=200" alt="For Businesses" className="mx-auto mb-6 rounded-xl" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">For Businesses</h3>
            <p className="text-lg text-gray-700">Save even on the last minute changes to travel plans</p>
          </div>
        </div>

        {/* How It Works Section - Icons replaced with placeholder images */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <img src="/placeholder.svg?height=48&width=48" alt="Chat Icon" className="h-12 w-12 text-blue-600" />
              </div>
              <p className="text-xl font-medium text-gray-800">Chat About Your Trip</p>
            </div>
            <div className="text-4xl text-gray-400 hidden md:block">→</div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-6 rounded-full mb-4">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Refine Icon"
                  className="h-12 w-12 text-purple-600"
                />
              </div>
              <p className="text-xl font-medium text-gray-800">Refine with AI</p>
            </div>
            <div className="text-4xl text-gray-400 hidden md:block">→</div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Explore Icon"
                  className="h-12 w-12 text-green-600"
                />
              </div>
              <p className="text-xl font-medium text-gray-800">Explore New Destinations</p>
            </div>
          </div>
        </div>

        {/* "Ready to get started?" section - button removed as requested */}
        <div className="text-center text-gray-700 text-lg">
          {/* This section is intentionally left without the "Start Planning" button */}
        </div>
      </div>
    </div>
  )
}
