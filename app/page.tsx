"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { BusinessDashboard } from "@/components/business-dashboard"
import { MarketplaceDashboard } from "@/components/marketplace-dashboard"
import { TravelersDashboard } from "@/components/travelers-dashboard"
import { BusinessTravelerDashboard } from "@/components/business-traveler-dashboard"
import { TravelerTypeModal } from "@/components/traveler-type-modal"
import { LejrrLandingV2 } from "@/components/landing-page-v2"
import { Menu } from "lucide-react"

function LejrrContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("landing")
  const [mounted, setMounted] = useState(false)
  const [showTravelerModal, setShowTravelerModal] = useState(false)
  const [travelerType, setTravelerType] = useState<"business" | "adventurer">("adventurer")

  // Ensure component is mounted before accessing search params
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load saved traveler type from session storage
  useEffect(() => {
    if (!mounted) return

    const savedTravelerType = sessionStorage.getItem("travelerType") as "business" | "adventurer" | null
    if (savedTravelerType) {
      setTravelerType(savedTravelerType)
    }
  }, [mounted])

  // Handle navigation from URL params only after mounting
  useEffect(() => {
    if (!mounted) return

    const tab = searchParams.get("tab")
    const type = searchParams.get("type") as "business" | "adventurer"

    if (tab && ["travelers", "businesses", "marketplace"].includes(tab)) {
      if (tab === "travelers") {
        const savedTravelerType = sessionStorage.getItem("travelerType") as "business" | "adventurer" | null

        if (type) {
          // URL has specific type, use it
          setTravelerType(type)
          sessionStorage.setItem("travelerType", type)
          setActiveTab("travelers")
          setShowTravelerModal(false)
        } else if (savedTravelerType) {
          // No type in URL but we have saved preference, use it
          setTravelerType(savedTravelerType)
          setActiveTab("travelers")
          setShowTravelerModal(false)
          // Update URL to reflect the saved type
          router.replace(`/?tab=travelers&type=${savedTravelerType}`)
        } else {
          // No type in URL and no saved preference, show modal
          setShowTravelerModal(true)
          setActiveTab("landing") // Stay on landing until selection is made
        }
      } else {
        setActiveTab(tab)
        setShowTravelerModal(false)
      }
    } else {
      setActiveTab("landing")
      setShowTravelerModal(false)
    }
  }, [searchParams, mounted, router])

  const handleNavigation = (section: string) => {
    if (section === "travelers") {
      const savedTravelerType = sessionStorage.getItem("travelerType") as "business" | "adventurer" | null

      if (savedTravelerType) {
        // User has previous choice, go directly to that dashboard
        setTravelerType(savedTravelerType)
        setActiveTab("travelers")
        setShowTravelerModal(false)
        router.push(`/?tab=travelers&type=${savedTravelerType}`)
      } else {
        // First time, show modal
        setShowTravelerModal(true)
        setActiveTab("landing") // Keep on landing until selection is made
      }
    } else {
      setActiveTab(section)
      setShowTravelerModal(false)
      router.push(`/?tab=${section}`)
    }
  }

  const handleTravelerTypeSelect = (type: "business" | "adventurer") => {
    setTravelerType(type)
    setShowTravelerModal(false) // Close modal immediately
    setActiveTab("travelers")
    // Save choice to session storage
    sessionStorage.setItem("travelerType", type)
    router.push(`/?tab=travelers&type=${type}`)
  }

  const handleTravelerTypeSwitch = (type: "business" | "adventurer") => {
    setTravelerType(type)
    // Save choice to session storage
    sessionStorage.setItem("travelerType", type)
    router.push(`/?tab=travelers&type=${type}`)
  }

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <h1 className="text-5xl font-bold text-black">Lejrr</h1>
          </header>
        </div>
      </div>
    )
  }

  // Landing Page Content
  if (activeTab === "landing") {
    return (
      <>
        <LejrrLandingV2 /> {/* Render the new LejrrLandingV2 component */}
        {/* Traveler Type Modal - still needed for first-time selection */}
        <TravelerTypeModal
          isOpen={showTravelerModal}
          onClose={() => setShowTravelerModal(false)}
          onSelect={handleTravelerTypeSelect}
        />
      </>
    )
  }

  // Dashboard Pages
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Hamburger Menu */}
        <header className="mb-12 flex justify-between items-center">
          <button
            onClick={() => handleNavigation("landing")}
            className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Lejrr
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </header>

        {/* Horizontal Menu Row */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-12">
            <div className="relative flex items-center">
              <button
                className={`text-xl font-medium py-2 px-4 transition-colors ${
                  activeTab === "travelers" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => handleNavigation("travelers")}
              >
                Travelers
              </button>

              {/* Segmented Control - Only show when on Travelers tab */}
              {activeTab === "travelers" && (
                <div className="ml-4 flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => handleTravelerTypeSwitch("adventurer")}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                      travelerType === "adventurer"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Adventurer
                  </button>
                  <button
                    onClick={() => handleTravelerTypeSwitch("business")}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                      travelerType === "business"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Business
                  </button>
                </div>
              )}

              {activeTab === "travelers" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>}
            </div>

            <div className="relative">
              <button
                className={`text-xl font-medium py-2 px-4 transition-colors ${
                  activeTab === "businesses" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => handleNavigation("businesses")}
              >
                Businesses
              </button>
              {activeTab === "businesses" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>}
            </div>

            <div className="relative">
              <button
                className={`text-xl font-medium py-2 px-4 transition-colors ${
                  activeTab === "marketplace" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => handleNavigation("marketplace")}
              >
                Marketplace
              </button>
              {activeTab === "marketplace" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>}
            </div>
          </div>
        </div>

        {/* Conditional Dashboard Rendering */}
        {activeTab === "travelers" && travelerType === "adventurer" && <TravelersDashboard />}
        {activeTab === "travelers" && travelerType === "business" && <BusinessTravelerDashboard />}
        {activeTab === "businesses" && <BusinessDashboard />}
        {activeTab === "marketplace" && <MarketplaceDashboard />}

        {/* Traveler Type Modal */}
        <TravelerTypeModal
          isOpen={showTravelerModal}
          onClose={() => setShowTravelerModal(false)}
          onSelect={handleTravelerTypeSelect}
        />

        {/* Footer */}
        <footer className="bg-white rounded-2xl p-8 mt-8">
          <div className="flex flex-wrap justify-around items-start gap-x-8 gap-y-4">
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                Lejrr connects travelers with amazing destinations and local experiences around the world.
              </p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-gray-900 mb-4">For Travelers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Discover Destinations</li>
                <li>Plan Your Trip</li>
                <li>Book Experiences</li>
                <li>Travel Guides</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-gray-900 mb-4">For Businesses</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>List Your Business</li>
                <li>Manage Bookings</li>
                <li>Analytics</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2024 Lejrr. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default function LejrrHomepage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white p-6">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16">
              <h1 className="text-5xl font-bold text-black">Lejrr</h1>
            </header>
          </div>
        </div>
      }
    >
      <LejrrContent />
    </Suspense>
  )
}
