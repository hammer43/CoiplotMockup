"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const LejrrLandingV2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleTryLejrr = () => {
    router.push("/?tab=travelers")
  }

  const animatedClouds = [
    { src: "/Medium1cloud.png", alt: "Cloud", className: "top-10 left-20 w-48", delay: "0s" },
    { src: "/SmallCloud.png", alt: "Cloud", className: "top-0 right-40 w-36", delay: "1s" },
    { src: "/MediumCloud1.png", alt: "Cloud", className: "bottom-20 left-10 w-44", delay: "2s" },
    { src: "/SmallCloud.png", alt: "Cloud", className: "bottom-0 right-20 w-32", delay: "3s" },
  ]

  const itineraryImages = [
    {
      src: "/itinerary_isla_grande.jpg",
      alt: "Isla Grande Itinerary",
      style: { transform: "rotate(5deg)", top: "20px", right: "0px" },
    },
    {
      src: "/itinerary_rome.jpg",
      alt: "Rome Itinerary",
      style: { transform: "rotate(-5deg)", bottom: "40rem", left: "0px" },
    },
  ]

  const howItWorksSteps = [
    {
      iconSrc: "/placeholder.svg?height=32&width=32",
      iconAlt: "Chat Icon",
      iconBg: "bg-blue-100",
      title: "Chat About Your Trip",
      lineBg: "bg-blue-500",
    },
    {
      iconSrc: "/placeholder.svg?height=32&width=32",
      iconAlt: "Refine Icon",
      iconBg: "bg-purple-100",
      title: "Refine with AI",
      lineBg: "bg-purple-500",
    },
    {
      iconSrc: "/placeholder.svg?height=32&width=32",
      iconAlt: "Explore Icon",
      iconBg: "bg-green-100",
      title: "Make Great Travel Choices",
      lineBg: "bg-green-500",
    },
  ]

  const bottomBubbles = [
    { src: "/MarkPlMor.png", alt: "Marketplace for Travel", bottom: "100px", left: "100px", right: undefined },
    { src: "/StayWorkCa.png", alt: "Staycations, Workations", bottom: "25px", left: "375px", right: undefined },
    { src: "/Exper.png", alt: "Experiential Travel", bottom: "100px", right: "75px", left: undefined },
  ]

  return (
    <div className="min-h-[280vh] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 relative overflow-hidden">
      {/* Animated Background Clouds */}
      {animatedClouds.map((cloud, index) => (
        <img
          key={index}
          src={cloud.src || "/placeholder.svg"}
          alt={cloud.alt}
          className={`absolute h-auto opacity-70 animate-pulse ${cloud.className}`}
          style={{ animationDelay: cloud.delay, animationDuration: "4s" }}
        />
      ))}

      {/* Itinerary Images - Placed as floating elements as per mockup */}
      {itineraryImages.map((image, index) => (
        <img
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          className="absolute w-[400px] h-auto z-10 rounded-xl shadow-lg"
          style={image.style}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="text-left">
            <h1 className="text-6xl font-bold text-white mb-4">Lejrr</h1>
            <h2 className="text-2xl font-extrabold text-lejrr-copilot-color mb-8">Your Travel AI Copilot</h2>
          </div>
          {/* AI Voice Bubble - Right justified */}
          <div className="absolute top-16 right-0 bg-white rounded-full p-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <img src="/Mic.png" alt="Mic Icon" className="w-6 h-6 text-blue-500" />
              <span className="text-blue-500 font-semibold">AI</span>
            </div>
          </div>
          {/* AI Suggestions Bubble - Right justified */}
          <div className="absolute top-0 right-0 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">AI Suggestions</span>
            </div>
          </div>
          <button
            onClick={handleTryLejrr}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Try Lejrr
          </button>
        </div>

        {/* For Travelers and Businesses Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-96">
          {/* Increased mb to push "How It Works" down */}
          {/* For Travelers */}
          <div className="bg-white rounded-2xl p-8 shadow-xl w-full md:w-3/4 mx-auto h-[345px]">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="For Travelers"
                className="w-32 h-32 mx-auto mb-6 rounded-2xl object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Travelers</h3>
              <p className="text-lg text-gray-600 font-medium">Discover hidden gems</p>
            </div>
          </div>

          {/* For Businesses - Updated verbiage */}
          <div className="bg-white rounded-2xl p-8 shadow-xl w-full md:w-3/4 mx-auto h-[345px]">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="For Businesses"
                className="w-32 h-32 mx-auto mb-6 rounded-2xl object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Businesses</h3>
              <p className="text-lg text-gray-600 font-medium">Save even on the last minute changes to travel plans</p>
            </div>
          </div>
        </div>

        {/* How It Works Section - Rounder boxes, smaller text */}
        <div className="text-center mb-12 ml-[150px] mr-auto max-w-4xl relative">
          {/* New Cloud Image above "How It Works" */}
          <img
            src="/Medium1cloud.png"
            alt="Decorative Cloud"
            className="absolute -top-[270px] left-1/2 -translate-x-1/2 w-64 h-auto opacity-80 z-0 ml-[100px]"
          />
          <h2 className="text-5xl font-bold text-blue-900 mb-12 relative z-10">How It Works</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-full p-6 shadow-xl flex flex-col items-center justify-center text-center w-64 h-64 transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${step.iconBg} rounded-full flex items-center justify-center`}>
                  <img src={step.iconSrc || "/placeholder.svg"} alt={step.iconAlt} className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <div className={`w-8 h-1 ${step.lineBg} mx-auto`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Bubbles Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] z-20">
        {bottomBubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute"
            style={{ bottom: bubble.bottom, left: bubble.left, right: bubble.right }}
          >
            <img src={bubble.src || "/placeholder.svg"} alt={bubble.alt} className="w-[280px] h-auto" />
          </div>
        ))}
      </div>

      {/* Parallax Effect for Mouse Movement */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full opacity-30 absolute top-1/4 left-1/4"></div>
        <div className="w-4 h-4 bg-white rounded-full opacity-40 absolute top-3/4 right-1/4"></div>
        <div className="w-8 h-8 bg-white rounded-full opacity-20 absolute top-1/2 left-3/4"></div>
      </div>
    </div>
  )
}

export default LejrrLandingV2
export { LejrrLandingV2 }
