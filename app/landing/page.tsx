"use client"

import { useRouter } from "next/navigation"
import { Mic } from "lucide-react"

export default function LandingPage() {
  const router = useRouter()

  const handleNavigation = (section: string) => {
    router.push(`/?tab=${section}`)
  }

  const featuredImages = [
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      alt: "Tropical beach paradise",
    },
    {
      src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
      alt: "Colosseum in Rome",
    },
    {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop",
      alt: "Mountain village at night",
    },
  ]

  const lookImages = [
    [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        alt: "Castle fortress landscape",
        heightClass: "h-64",
      },
      {
        src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=200&fit=crop",
        alt: "Desert canyon landscape",
        heightClass: "h-48",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=320&fit=crop",
        alt: "Tropical beach with palm tree",
        heightClass: "h-80",
      },
      {
        src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=150&fit=crop",
        alt: "New York City skyline",
        heightClass: "h-32",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
        alt: "Coastal cliffs",
        heightClass: "h-48",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
        alt: "Venice canal with colorful buildings",
        heightClass: "h-64",
      },
    ],
  ]

  const navButtons = [
    { label: "For Travelers", section: "travelers" },
    { label: "For Businesses", section: "businesses" },
    { label: "Marketplace", section: "marketplace" },
  ]

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-black">Lejrr</h1>
        </header>

        {/* Featured Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-8">Featured</h2>
          <div className="grid grid-cols-3 gap-6 h-64">
            {featuredImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Look Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-8">Look..</h2>
          <div className="grid grid-cols-3 gap-4">
            {lookImages.map((column, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {column.map((image, imgIndex) => (
                  <div key={imgIndex} className={`rounded-2xl overflow-hidden ${image.heightClass}`}>
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search deals, dates, locales here..."
            className="w-full p-4 pr-16 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-red-500 rounded-xl hover:bg-red-50 transition-colors">
            <Mic className="h-5 w-5 text-red-500" />
            <div className="absolute inset-0 rounded-xl border-2 border-red-500 animate-pulse opacity-75"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-red-400 animate-ping opacity-50"></div>
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-3 gap-4">
          {navButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(button.section)}
              className="p-6 bg-white rounded-2xl border-2 border-gray-300 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-left"
            >
              <h3 className="text-xl font-semibold text-black">{button.label}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
