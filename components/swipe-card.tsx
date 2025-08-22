"use client"

import { useState } from "react"
import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SwipeCardProps {
  imageSrc: string
  altText: string
  onSwipe: (action: "like" | "dislike") => void
}

export function SwipeCard({ imageSrc, altText, onSwipe }: SwipeCardProps) {
  const [isSwiping, setIsSwiping] = useState(false)

  const handleSwipe = (action: "like" | "dislike") => {
    setIsSwiping(true)
    // In a real app, you might add a small delay or animation here
    setTimeout(() => {
      onSwipe(action)
      setIsSwiping(false)
    }, 300) // Simulate a brief animation
  }

  return (
    <Card className={`w-full max-w-md mx-auto relative overflow-hidden ${isSwiping ? "animate-swipe-out" : ""}`}>
      <CardContent className="p-0">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="w-full h-[400px] object-cover rounded-t-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 className="text-xl font-bold">{altText.split(" in ")[0]}</h3> {/* Extract main name */}
          <p className="text-sm">{altText.split(" in ")[1] || altText}</p> {/* Extract location or full alt text */}
        </div>
      </CardContent>
      <div className="flex justify-center gap-8 p-4 bg-white rounded-b-xl">
        <Button
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full border-4 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 bg-transparent"
          onClick={() => handleSwipe("dislike")}
        >
          <X className="h-8 w-8" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full border-4 border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600 transition-all duration-200 bg-transparent"
          onClick={() => handleSwipe("like")}
        >
          <Heart className="h-8 w-8" />
        </Button>
      </div>
    </Card>
  )
}
