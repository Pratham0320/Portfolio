"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, CheckCircle, XCircle } from "lucide-react"

interface Challenge {
  id: number
  title: string
  description: string
  question: string
  answer: string
  hint: string
}

export default function InteractiveChallenges() {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([])

  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Array Manipulation",
      description: "Find the maximum number in an array",
      question: "What is the maximum number in [3, 7, 2, 9, 1, 5]?",
      answer: "9",
      hint: "Look for the largest value in the array",
    },
    {
      id: 2,
      title: "String Reversal",
      description: "Reverse a string",
      question: "What is 'hello' reversed?",
      answer: "olleh",
      hint: "Read the string backwards",
    },
    {
      id: 3,
      title: "Fibonacci Sequence",
      description: "Calculate Fibonacci number",
      question: "What is the 7th Fibonacci number? (starting from 0, 1, 1, 2, 3, 5, 8...)",
      answer: "13",
      hint: "F(7) = F(6) + F(5) = 8 + 5 = 13",
    },
  ]

  const handleSubmit = () => {
    const correct = userAnswer.toLowerCase().trim() === challenges[currentChallenge].answer.toLowerCase()
    setIsCorrect(correct)
    setShowResult(true)

    if (correct && !completedChallenges.includes(currentChallenge)) {
      setCompletedChallenges([...completedChallenges, currentChallenge])
    }
  }

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length)
    setUserAnswer("")
    setShowResult(false)
    setShowHint(false)
  }

  const resetChallenge = () => {
    setUserAnswer("")
    setShowResult(false)
    setShowHint(false)
  }

  return (
    <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Interactive Coding Challenges
        </CardTitle>
        <div className="flex gap-2">
          {challenges.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                completedChallenges.includes(index)
                  ? "bg-green-500"
                  : index === currentChallenge
                    ? "bg-blue-500"
                    : "bg-slate-300 dark:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{challenges[currentChallenge].title}</h3>
          <p className="text-slate-600 dark:text-slate-300">{challenges[currentChallenge].description}</p>
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <p className="font-medium">{challenges[currentChallenge].question}</p>
          </div>
        </div>

        <div className="space-y-3">
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer..."
            disabled={showResult}
            onKeyPress={(e) => e.key === "Enter" && !showResult && handleSubmit()}
          />

          <div className="flex gap-2">
            <Button onClick={handleSubmit} disabled={!userAnswer || showResult}>
              Submit Answer
            </Button>
            {!showHint && !showResult && (
              <Button variant="outline" onClick={() => setShowHint(true)}>
                Show Hint
              </Button>
            )}
            {showResult && (
              <Button variant="outline" onClick={nextChallenge}>
                Next Challenge
              </Button>
            )}
            <Button variant="ghost" onClick={resetChallenge}>
              Reset
            </Button>
          </div>
        </div>

        {showHint && !showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
          >
            <p className="text-sm text-yellow-800 dark:text-yellow-200">💡 Hint: {challenges[currentChallenge].hint}</p>
          </motion.div>
        )}

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${
              isCorrect
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span
                className={`font-semibold ${isCorrect ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}
              >
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
            </div>
            {!isCorrect && (
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                The correct answer is: {challenges[currentChallenge].answer}
              </p>
            )}
          </motion.div>
        )}

        <div className="text-center text-sm text-slate-600 dark:text-slate-300">
          Challenge {currentChallenge + 1} of {challenges.length} •{completedChallenges.length} completed
        </div>
      </CardContent>
    </Card>
  )
}
