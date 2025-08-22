"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Mic } from "lucide-react"

export function BusinessDashboard() {
  const [focusedPane, setFocusedPane] = useState<"business-operations" | "ai-assistant" | "performance">(
    "business-operations",
  )

  const scheduledTrips = [
    {
      date: "Mon, Apr 15",
      details: "Kayak Tour",
      time: "9:00 AM",
      status: "Full",
      statusClass: "bg-green-100 text-green-800",
    },
    {
      date: "Tue, 16",
      details: "Rafting Trip",
      time: "100 PM",
      status: "60%",
      statusClass: "bg-yellow-100 text-yellow-800",
    },
    {
      date: "Wed, 17",
      details: "Rafting Trip",
      time: "10:00 AM",
      status: "Full",
      statusClass: "bg-red-100 text-red-800",
    },
    {
      date: "Thu, 18",
      details: "Rafting Trip",
      time: "12:00 PM",
      status: "Full",
      statusClass: "bg-red-100 text-red-800",
    },
  ]

  const performanceCards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=200&fit=crop",
      imageAlt: "Alpine Adventures",
      title: "Alpine Adventures",
      duration: "4 days",
      user: "Sarha R.",
      avgPrice: "$120",
      badge: "AI Optimized 🔄",
      badgeClass: "bg-green-100 text-green-800",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=200&fit=crop",
      imageAlt: "Sedona Hiking Tour",
      title: "Sedona Hiking Tour",
      duration: "1 day",
      user: "Jane M.",
      avgPrice: "$85",
      badge: "Weather Adaptive",
      badgeClass: "bg-blue-100 text-blue-800",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Left Column: Scheduled Trips */}
      <div
        className={`space-y-6 bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
          focusedPane === "business-operations" ? "border-blue-600" : "border-gray-200"
        }`}
        onClick={() => setFocusedPane("business-operations")}
        tabIndex={0}
        onFocus={() => setFocusedPane("business-operations")}
      >
        <h2 className="text-2xl font-bold text-gray-900">Business Operations</h2>

        {/* AI Alert Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-gray-800">
              <strong>AI filled 8 cancellations overnight</strong> – earned $840 sira
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Scheduled Trips</h3>

          <div className="space-y-3">
            {scheduledTrips.map((trip, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{trip.date}</p>
                  <p className="text-sm text-gray-600">{trip.details}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{trip.time}</p>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${trip.statusClass}`}>{trip.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Column: AI Messaging & Rafting Details */}
      <div
        className={`space-y-6 bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
          focusedPane === "ai-assistant" ? "border-blue-600" : "border-gray-200"
        }`}
        onClick={() => setFocusedPane("ai-assistant")}
        tabIndex={0}
        onFocus={() => setFocusedPane("ai-assistant")}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Assistant</h2>
        <div className="bg-white rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=300&fit=crop"
            alt="Rafting adventure"
            className="w-full h-48 object-cover"
          />

          <div className="p-6 space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-900 font-medium">
                Your Tuesday rafting trip is <strong>60% full</strong> — I'm targeting $12 Interested travelers with
                optimized pricing. Approve?
              </p>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <p>Rain expected tomorrow — indoor alternatives suggested.</p>
              <p>Adjusting price to $115 based on demand.</p>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Message Lejrr..."
                className="w-full p-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors">
                <Mic className="h-4 w-4 text-red-500" />
                <div className="absolute inset-0 rounded-lg border-2 border-red-500 animate-pulse opacity-75"></div>
                <div className="absolute inset-0 rounded-lg border-2 border-red-400 animate-ping opacity-50"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Marketplace Performance */}
      <div
        className={`space-y-6 bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
          focusedPane === "performance" ? "border-blue-600" : "border-gray-200"
        }`}
        onClick={() => setFocusedPane("performance")}
        tabIndex={0}
        onFocus={() => setFocusedPane("performance")}
      >
        <h2 className="text-2xl font-bold text-gray-900">Performance</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span className="font-semibold">+17%</span>
          </div>
        </div>

        <div className="space-y-4">
          {performanceCards.map((card, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={card.imageSrc || "/placeholder.svg"}
                  alt={card.imageAlt}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>{card.duration}</span>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{card.user}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">Adg {card.avgPrice}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${card.badgeClass}`}>{card.badge}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
