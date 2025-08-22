"use client"

import { useState } from "react"
import { MessageCircle, TrendingUp, Mic } from "lucide-react"
import { SwipeCard } from "@/components/swipe-card" // Import the SwipeCard component

export function TravelersDashboard() {
  const [currentSwipeImageIndex, setCurrentSwipeImageIndex] = useState(0)
  const [focusedPane, setFocusedPane] = useState<"inspiration" | "ai-copilot" | "trip-summary">("inspiration")

  const swipeImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
      alt: "Mountain lake with reflection in Banff National Park",
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop&crop=center",
      alt: "Desert landscape at sunset in Monument Valley",
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center",
      alt: "Tropical beach paradise in Maldives",
    },
    {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop&crop=center",
      alt: "City skyline at night in New York",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
      alt: "Forest waterfall in Iceland",
    },
    {
      src: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop&crop=center",
      alt: "Snow-capped mountains in the Alps",
    },
  ]

  const inspirationGridImages = [
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      alt: "Tropical beach paradise",
      badge: "Adaptive TripTik™",
      isWeatherAlert: false,
      isLocation: false,
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=250&fit=crop",
      alt: "Beach with rain forecast",
      badge: "Rain expected tomorrow",
      isWeatherAlert: true,
      isLocation: false,
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=280&fit=crop",
      alt: "Forest waterfall",
      badge: "Adaptive TripTik™",
      isWeatherAlert: false,
      isLocation: false,
    },
    {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=320&fit=crop",
      alt: "Cinque Terre coastal town",
      badge: "Adaptive TripTik™",
      isWeatherAlert: false,
      isLocation: false,
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop",
      alt: "Desert arch formation",
      badge: "Altensted",
      isWeatherAlert: false,
      isLocation: true,
    },
    {
      src: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=290&fit=crop",
      alt: "Mountain village",
      badge: "7 aduaways",
      isWeatherAlert: false,
      isLocation: true,
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      alt: "Lighthouse on coast",
      badge: "Adaptive TripTik",
      isWeatherAlert: false,
      isLocation: false,
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop",
      alt: "Mountain cable car",
      badge: "Weather adaptive",
      isWeatherAlert: true,
      isLocation: false,
    },
  ]

  const tripSummaryDetails = {
    badge: "Weather Adaptive",
    badgeClass: "bg-blue-100 text-blue-800",
    title: "AI-Optimized",
    location: "Maui, Jun 5—11",
    duration: "7 days",
    day1: {
      title: "Canyoning Tour",
      subtitle: "Adjusted duto rain",
      price: "$115",
      change: "$5",
      changeClass: "text-green-600",
    },
  }

  const handleSwipe = (action: "like" | "dislike") => {
    console.log(`Swiped ${action} on: ${swipeImages[currentSwipeImageIndex].alt}`)
    setCurrentSwipeImageIndex((prevIndex) => (prevIndex + 1) % swipeImages.length)
  }

  const currentSwipeImage = swipeImages[currentSwipeImageIndex]

  return (
    <>
      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left Pane - Inspiration Grid */}
        <div
          className={`bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
            focusedPane === "inspiration" ? "border-blue-600" : "border-gray-200"
          }`}
          onClick={() => setFocusedPane("inspiration")}
          tabIndex={0}
          onFocus={() => setFocusedPane("inspiration")}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Inspiration</h2>

          {/* Swipe Card Feature */}
          <div className="mb-6">
            <SwipeCard imageSrc={currentSwipeImage.src} altText={currentSwipeImage.alt} onSwipe={handleSwipe} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {inspirationGridImages.map((image, index) => (
              <div key={index} className="relative break-inside-avoid">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full rounded-xl object-cover"
                  style={{ height: `${200 + (index % 3) * 40}px` }}
                />
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    image.isWeatherAlert
                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                      : image.isLocation
                        ? "bg-white/90 text-gray-800 border border-gray-200"
                        : "bg-gray-100/90 text-gray-800 border border-gray-200"
                  }`}
                >
                  {image.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Pane - AI Chat Interface */}
        <div
          className={`bg-white rounded-2xl p-6 flex flex-col border-4 cursor-pointer transition-all duration-200 ${
            focusedPane === "ai-copilot" ? "border-blue-600" : "border-gray-200"
          }`}
          onClick={() => setFocusedPane("ai-copilot")}
          tabIndex={0}
          onFocus={() => setFocusedPane("ai-copilot")}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Copilot</h2>
          <div className="flex-1 space-y-4 mb-6">
            {/* Beach Image */}
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop"
                alt="Beach scene"
                className="w-full h-full object-cover"
              />
            </div>

            {/* AI Message */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-900 font-medium">
                Ain is forecast tomorrow. Switching your hike to a canyoning tour—shall I book it?
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Message..."
                className="w-full p-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors">
                <Mic className="h-4 w-4 text-red-500" />
                <div className="absolute inset-0 rounded-lg border-2 border-red-500 animate-pulse opacity-75"></div>
                <div className="absolute inset-0 rounded-lg border-2 border-red-400 animate-ping opacity-50"></div>
              </button>
            </div>
            <button className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Pane - Trip Summary */}
        <div
          className={`bg-white rounded-2xl p-6 space-y-6 border-4 cursor-pointer transition-all duration-200 ${
            focusedPane === "trip-summary" ? "border-blue-600" : "border-gray-200"
          }`}
          onClick={() => setFocusedPane("trip-summary")}
          tabIndex={0}
          onFocus={() => setFocusedPane("trip-summary")}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Summary</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${tripSummaryDetails.badgeClass}`}>
                {tripSummaryDetails.badge}
              </span>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">{tripSummaryDetails.title}</h4>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                <span className="font-bold text-gray-900">VECES</span>
              </div>
              <p className="text-gray-600">{tripSummaryDetails.location}</p>
              <p className="text-gray-600">{tripSummaryDetails.duration}</p>
            </div>

            <div className="border-t pt-4">
              <h5 className="font-bold text-gray-900 mb-2">Day 1</h5>
              <h6 className="text-xl font-semibold text-gray-900 mb-1">{tripSummaryDetails.day1.title}</h6>
              <p className="text-gray-600 text-sm mb-3">{tripSummaryDetails.day1.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{tripSummaryDetails.day1.price}</span>
                <div className={`flex items-center gap-1 ${tripSummaryDetails.day1.changeClass}`}>
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{tripSummaryDetails.day1.change}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
