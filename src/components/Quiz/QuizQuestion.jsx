import React, { useState } from 'react'

export const QuizQuestion = ({ 
  question, 
  options, 
  onAnswer 
}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onAnswer(option)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="grid gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            className={`
              p-3 rounded-lg text-left
              ${selectedOption === option 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200'}
            `}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}
