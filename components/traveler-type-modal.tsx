"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TravelerTypeModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (type: "business" | "adventurer") => void
}

export function TravelerTypeModal({ isOpen, onClose, onSelect }: TravelerTypeModalProps) {
  const [selectedType, setSelectedType] = useState<"business" | "adventurer" | null>(null)

  if (!isOpen) return null

  const handleSelect = () => {
    if (selectedType) {
      onSelect(selectedType)
      onClose()
    }
  }

  const travelerOptions = [
    {
      value: "business",
      title: "Business",
      description: "Corporate travel management and expense tracking",
    },
    {
      value: "adventurer",
      title: "Adventurer",
      description: "Discover destinations and personalized experiences",
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Select Traveler Type</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {travelerOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name="travelerType"
                value={option.value}
                checked={selectedType === option.value}
                onChange={(e) => setSelectedType(e.target.value as "business" | "adventurer")}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Cancel
          </Button>
          <Button onClick={handleSelect} disabled={!selectedType} className="flex-1">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
