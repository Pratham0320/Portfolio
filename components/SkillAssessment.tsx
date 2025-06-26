"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, CheckCircle, XCircle, Trophy, Target, Lightbulb } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

export default function SkillAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
      explanation:
        "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.",
    },
    {
      id: 2,
      question: "Which React hook is used for side effects?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correct: 1,
      explanation:
        "useEffect is used to perform side effects in functional components, such as data fetching or DOM manipulation.",
    },
    {
      id: 3,
      question: "What does CSS Grid's 'fr' unit represent?",
      options: ["Fixed ratio", "Fractional unit", "Frame rate", "Font ratio"],
      correct: 1,
      explanation: "The 'fr' unit represents a fractional unit that distributes available space proportionally.",
    },
    {
      id: 4,
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
      correct: 1,
      explanation:
        "Quick Sort has an average-case time complexity of O(n log n), making it one of the most efficient sorting algorithms.",
    },
    {
      id: 5,
      question: "What is the purpose of the 'key' prop in React?",
      options: ["Styling", "Event handling", "List rendering optimization", "State management"],
      correct: 2,
      explanation:
        "The 'key' prop helps React identify which items have changed, are added, or removed, optimizing list rendering.",
    },
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "Excellent! 🏆"
    if (percentage >= 60) return "Good job! 👍"
    if (percentage >= 40) return "Not bad! 📚"
    return "Keep learning! 💪"
  }

  if (quizCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-green-700 dark:text-green-300">
              <Trophy className="w-7 h-7" />
              Quiz Completed!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            >
              {score}/{questions.length}
            </motion.div>
            <div className="text-2xl font-semibold text-green-700 dark:text-green-300">{getScoreMessage()}</div>
            <div className="text-lg text-green-600 dark:text-green-400">
              You scored {Math.round((score / questions.length) * 100)}%
            </div>
            <Button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg px-8 py-3"
            >
              🔄 Take Quiz Again
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-800 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Brain className="w-7 h-7 text-orange-600" />
            </motion.div>
            Skill Assessment Quiz
            <Target className="w-5 h-5 text-red-500" />
          </CardTitle>
          <div className="flex items-center justify-between mt-3">
            <span className="text-orange-700 dark:text-orange-300 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Score: {score}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            className="h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-inner"
          />

          <div className="space-y-6">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-orange-200 dark:border-orange-700"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {questions[currentQuestion].question}
              </h3>
            </motion.div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 shadow-lg ${
                    selectedAnswer === index
                      ? showResult
                        ? index === questions[currentQuestion].correct
                          ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
                          : "border-red-500 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30"
                        : "border-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30"
                      : showResult && index === questions[currentQuestion].correct
                        ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
                        : "border-slate-300 dark:border-slate-600 hover:border-orange-400 dark:hover:border-orange-500 bg-white/50 dark:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && (
                      <>
                        {index === questions[currentQuestion].correct && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                        {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Explanation</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">{questions[currentQuestion].explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg py-3 text-lg font-semibold"
            >
              {currentQuestion === questions.length - 1 ? "🏁 Finish Quiz" : "➡️ Next Question"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
