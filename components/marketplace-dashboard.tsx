"use client"

import { useState } from "react"
import { Mic } from "lucide-react"

export function MarketplaceDashboard() {
  // Single pane, so it's always focused
  const [focusedPane] = useState<"marketplace">("marketplace")

  const inspirationImages = [
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      alt: "Tropical beach paradise",
      badge: "Adaptive TripTik™",
      badgePosition: "top-left",
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=250&fit=crop",
      alt: "Beach with rain forecast",
      badge: "Rain expected tomorrow",
      isWeatherAlert: true,
      badgePosition: "bottom-left",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=280&fit=crop",
      alt: "Forest waterfall",
      badge: "Adaptive TripTik™",
      badgePosition: "top-left",
    },
    {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=320&fit=crop",
      alt: "Cinque Terre coastal town",
      badge: "Adaptive TripTik™",
      badgePosition: "top-left",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop",
      alt: "Desert arch formation",
      badge: "Altensted",
      badgePosition: "bottom-left",
      secondaryBadge: "7 aduaways",
    },
    {
      src: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=290&fit=crop",
      alt: "Mountain village",
      badge: "Adaptive TripTik",
      badgePosition: "bottom-left",
      secondaryBadge: "7 aduaways",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      alt: "Lighthouse on coast",
      badge: "Adaptive TripTik",
      badgePosition: "top-left",
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop",
      alt: "Mountain cable car",
      badge: "Weather adaptive",
      badgePosition: "bottom-right",
    },
  ]

  return (
    <div
      className={`space-y-8 bg-white rounded-2xl p-6 border-4 ${
        focusedPane === "marketplace" ? "border-blue-600" : "border-gray-200"
      }`}
    >
      {/* Inspiration Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Marketplace</h2>

        {/* 4x2 Grid of Images */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {inspirationImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />

              {/* Primary Badge */}
              <div
                className={`absolute ${
                  image.badgePosition === "top-left"
                    ? "top-3 left-3"
                    : image.badgePosition === "bottom-left"
                      ? "bottom-3 left-3"
                      : image.badgePosition === "bottom-right"
                        ? "bottom-3 right-3"
                        : "top-3 right-3"
                } px-3 py-1.5 rounded-full text-sm font-medium ${
                  image.isWeatherAlert
                    ? "bg-blue-100/90 text-blue-800 border border-blue-200"
                    : "bg-white/90 text-gray-800 border border-gray-200"
                }`}
              >
                {image.badge}
              </div>

              {/* Secondary Badge if exists */}
              {image.secondaryBadge && (
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-sm font-medium bg-white/90 text-gray-800 border border-gray-200">
                  {image.secondaryBadge}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar with Microphone Inside */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search deals, dates, locales here..."
            className="w-full p-4 pr-16 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-red-500 rounded-xl hover:bg-red-50 transition-colors">
            <Mic className="h-5 w-5 text-red-500" />
            <div className="absolute inset-0 rounded-xl border-2 border-red-500 animate-pulse opacity-75"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-red-400 animate-ping opacity-50"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
