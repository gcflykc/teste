import React, { useState } from 'react'
import { QuizQuestion } from '../components/Quiz/QuizQuestion'
import { supabase } from '../utils/supabase'

const QUIZ_QUESTIONS = [
  {
    question: "Como você tem se sentido nas últimas semanas?",
    options: [
      { text: "Muito bem", value: 5, category: 'felicidade' },
      { text: "Razoavelmente bem", value: 3, category: 'felicidade' },
      { text: "Nem bem, nem mal", value: 2, category: 'felicidade' },
      { text: "Um pouco triste", value: 1, category: 'felicidade' }
    ]
  },
  // Adicionar mais questões...
]

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      submitQuiz(newAnswers)
    }
  }

  const submitQuiz = async (finalAnswers) => {
    try {
      const { data, error } = await supabase
        .from('respostas_quiz')
        .insert({
          respostas: finalAnswers,
          usuario_id: supabase.auth.currentUser.id
        })

      if (error) throw error
      setQuizCompleted(true)
    } catch (error) {
      console.error('Erro ao submeter quiz', error)
    }
  }

  if (quizCompleted) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Concluído!</h2>
        <p>Obrigado por compartilhar seus sentimentos.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <QuizQuestion
          question={QUIZ_QUESTIONS[currentQuestion].question}
          options={QUIZ_QUESTIONS[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  )
}
