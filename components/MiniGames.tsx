"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, Trophy, RotateCcw, Zap, Star } from "lucide-react"

export default function MiniGames() {
  const [currentGame, setCurrentGame] = useState<"memory" | "snake" | "quiz">("memory")
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle")

  // Memory Game State
  const [cards, setCards] = useState<Array<{ id: number; value: string; flipped: boolean; matched: boolean }>>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isChecking, setIsChecking] = useState(false)

  // Initialize Memory Game
  const initMemoryGame = () => {
    const values = ["🚀", "💻", "🎯", "⚡", "🔥", "💡", "🎨", "🌟"]
    const gameCards = [...values, ...values].map((value, index) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }))

    // Shuffle cards using Fisher-Yates algorithm
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]]
    }

    setCards(gameCards)
    setScore(0)
    setGameState("playing")
    setFlippedCards([])
    setIsChecking(false)
  }

  const flipCard = (cardId: number) => {
    const currentCard = cards.find((card) => card.id === cardId)

    if (isChecking || !currentCard || currentCard.flipped || currentCard.matched || flippedCards.length >= 2) {
      return
    }

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    setCards((prev) => prev.map((card) => (card.id === cardId ? { ...card, flipped: true } : card)))

    if (newFlippedCards.length === 2) {
      setIsChecking(true)

      const [firstCardId, secondCardId] = newFlippedCards
      const updatedCards = cards.map((card) => (card.id === cardId ? { ...card, flipped: true } : card))
      const firstCard = updatedCards.find((card) => card.id === firstCardId)
      const secondCard = updatedCards.find((card) => card.id === secondCardId)

      if (firstCard && secondCard && firstCardId !== secondCardId && firstCard.value === secondCard.value) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCardId || card.id === secondCardId ? { ...card, matched: true, flipped: true } : card,
            ),
          )
          setScore((prev) => prev + 10)
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCardId || card.id === secondCardId ? { ...card, flipped: false } : card,
            ),
          )
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameState("won")
    }
  }, [cards])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Gamepad2 className="w-7 h-7 text-purple-600" />
            </motion.div>
            Mini Games
            <Zap className="w-5 h-5 text-yellow-500" />
          </CardTitle>
          <div className="flex gap-3 mt-3">
            <Button
              size="sm"
              variant={currentGame === "memory" ? "default" : "outline"}
              onClick={() => setCurrentGame("memory")}
              className={currentGame === "memory" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : ""}
            >
              Memory Game
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {currentGame === "memory" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-4">
                  <motion.div
                    key={score}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-xl text-purple-700 dark:text-purple-300">Score: {score}</span>
                  </motion.div>
                  {gameState === "won" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-green-600"
                    >
                      <Trophy className="w-5 h-5" />
                      <span className="font-semibold">You Won! 🎉</span>
                    </motion.div>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={initMemoryGame}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {gameState === "idle" ? "Start Game" : "New Game"}
                </Button>
              </div>

              {gameState !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-4 gap-3 p-4 bg-white/30 dark:bg-slate-800/30 rounded-xl"
                >
                  {cards.map((card, index) => (
                    <motion.button
                      key={card.id}
                      initial={{ opacity: 0, rotateY: 180 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: isChecking || card.flipped || card.matched ? 1 : 1.05 }}
                      whileTap={{ scale: isChecking || card.flipped || card.matched ? 1 : 0.95 }}
                      onClick={() => flipCard(card.id)}
                      disabled={isChecking || card.flipped || card.matched}
                      className={`aspect-square rounded-xl border-2 text-2xl font-bold transition-all duration-300 shadow-lg ${
                        card.matched
                          ? "bg-gradient-to-br from-green-400 to-emerald-500 border-green-300 text-white shadow-green-200"
                          : card.flipped
                            ? "bg-gradient-to-br from-blue-400 to-cyan-500 border-blue-300 text-white shadow-blue-200"
                            : "bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 border-slate-300 dark:border-slate-500 hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-500 dark:hover:to-slate-600 cursor-pointer shadow-slate-200 dark:shadow-slate-700"
                      } ${isChecking || card.flipped || card.matched ? "cursor-not-allowed" : ""}`}
                    >
                      {card.flipped || card.matched ? card.value : "?"}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {gameState === "playing" && (
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700">
                  <p className="text-purple-700 dark:text-purple-300 font-medium">
                    🎯 Find matching pairs by clicking cards!
                  </p>
                  <div className="flex justify-center gap-6 mt-2 text-sm text-purple-600 dark:text-purple-400">
                    <span>Cards flipped: {flippedCards.length}/2</span>
                    <span>Matches: {cards.filter((card) => card.matched).length / 2}/8</span>
                  </div>
                  {isChecking && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-blue-600 dark:text-blue-400 mt-2 font-medium"
                    >
                      🔍 Checking match...
                    </motion.p>
                  )}
                </div>
              )}

              {gameState === "won" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-300 dark:border-green-700"
                >
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-3">🎉 Congratulations! 🎉</h3>
                  <p className="text-green-700 dark:text-green-400 mb-4">
                    You found all pairs with a score of <strong>{score}</strong> points!
                  </p>
                  <Button
                    onClick={initMemoryGame}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
                  >
                    🎮 Play Again
                  </Button>
                </motion.div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
