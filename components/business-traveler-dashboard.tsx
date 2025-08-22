"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mic } from "lucide-react"

export function BusinessTravelerDashboard() {
  const [focusedPane, setFocusedPane] = useState<"travel-activity" | "copilot" | "corporate-marketplace">(
    "travel-activity",
  )

  const scheduledTrips = [
    {
      date: "Mon, Apr 15",
      details: "Take · NYC/The Hague",
      status: "Final",
      statusClass: "bg-green-100 text-green-800",
    },
    {
      date: "Maria, Mar 16",
      details: "Phoenix · Business",
      status: "Canceled",
      statusClass: "bg-red-100 text-red-800",
    },
    {
      date: "Wed, Apr 17",
      details: "Chicago · Conference",
      status: "Pending",
      statusClass: "bg-yellow-100 text-yellow-800",
    },
  ]

  const marketplaceItems = [
    {
      type: "flight",
      logoText: "UA",
      logoBg: "bg-blue-600",
      name: "United",
      change: "+17%",
      changeClass: "text-green-600",
      duration: "4 h 38 min",
      avgPrice: "$320",
      perText: "per employee",
      policy: "Policy Compliant ✓",
      policyClass: "bg-green-100 text-green-800",
    },
    {
      type: "hotel",
      imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop",
      imageAlt: "Hyatt hotel room",
      name: "Hyatt",
      nights: "2 nights",
      avgPrice: "$240",
      perText: "for Maria",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Left Pane - Travel Activity */}
      <div
        className={`bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
          focusedPane === "travel-activity" ? "border-blue-600" : "border-gray-200"
        }`}
        onClick={() => setFocusedPane("travel-activity")}
        tabIndex={0}
        onFocus={() => setFocusedPane("travel-activity")}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Activity</h2>

        {/* AI Savings Alert */}
        <Card className="bg-blue-50 border-blue-200 mb-6">
          <CardContent className="p-4">
            <p className="text-sm text-gray-800">
              <strong>AI applied 4 unused tickets</strong> —$520 saved this week
            </p>
          </CardContent>
        </Card>

        {/* Scheduled Trips */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Trips</h3>

          <div className="space-y-4">
            {scheduledTrips.map((trip, index) => (
              <div key={index} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{trip.date}</p>
                  <p className="text-sm text-gray-600">{trip.details}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${trip.statusClass}`}>{trip.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Spend */}
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-1">This week's travel spend:</p>
          <p className="text-xl font-bold text-gray-900">
            $12,450 <span className="text-sm font-normal text-gray-600">(8% vs last week)</span>
          </p>
        </div>
      </div>

      {/* Middle Pane - Copilot */}
      <div
        className={`bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
          focusedPane === "copilot" ? "border-blue-600" : "border-gray-200"
        }`}
        onClick={() => setFocusedPane("copilot")}
        tabIndex={0}
        onFocus={() => setFocusedPane("copilot")}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Copilot</h2>

        {/* Airplane Image */}
        <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=300&fit=crop"
            alt="Commercial airplane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Booking Details */}
        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-900 font-medium">
              Book guest profile: John (contractor) to Seattle Thurs-Fri. Upgrade ok under $250 delta
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-900 font-medium">
              Rebooked Maria's flight – upgraded her seat, applied $230 credit
            </p>
          </div>
        </div>

        {/* Command Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter a command or or request"
            className="w-full p-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors">
            <Mic className="h-4 w-4 text-red-500" />
            <div className="absolute inset-0 rounded-lg border-2 border-red-500 animate-pulse opacity-75"></div>
            <div className="absolute inset-0 rounded-lg border-2 border-red-400 animate-ping opacity-50"></div>
          </button>
        </div>
      </div>

      {/* Right Pane - Corporate Marketplace */}
      <div
        className={`bg-white rounded-2xl p-6 border-4 cursor-pointer transition-all duration-200 ${
          focusedPane === "corporate-marketplace" ? "border-blue-600" : "border-gray-200"
        }`}
        onClick={() => setFocusedPane("corporate-marketplace")}
        tabIndex={0}
        onFocus={() => setFocusedPane("corporate-marketplace")}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Corporate Marketplace</h2>

        {marketplaceItems.map((item, index) => (
          <Card key={index} className="mb-6">
            <CardContent className="p-4">
              {item.type === "flight" && (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-6 ${item.logoBg} rounded flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">{item.logoText}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{item.name}</span>
                    </div>
                    <div className={`flex items-center gap-1 text-green-600 ${item.changeClass}`}>
                      <span className="text-sm font-medium">{item.change}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Avg {item.avgPrice}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <span>{item.perText}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${item.policyClass}`}>{item.policy}</span>
                  </div>
                </>
              )}
              {item.type === "hotel" && (
                <>
                  <img
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={item.imageAlt}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.nights}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Avg {item.avgPrice}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <span>{item.perText}</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
