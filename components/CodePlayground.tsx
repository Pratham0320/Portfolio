"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, RotateCcw, Code, Terminal, Sparkles } from "lucide-react"

export default function CodePlayground() {
  const [code, setCode] = useState(`// Welcome to the Code Playground!
// Try editing this JavaScript code

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}`)

  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const runCode = () => {
    setIsRunning(true)
    setOutput("")

    // Capture console.log output
    const originalLog = console.log
    let capturedOutput = ""

    console.log = (...args) => {
      capturedOutput += args.join(" ") + "\n"
    }

    try {
      // Create a function from the code and execute it
      const func = new Function(code)
      func()
      setOutput(capturedOutput || "Code executed successfully!")
    } catch (error) {
      setOutput(`Error: ${error.message}`)
    } finally {
      console.log = originalLog
      setIsRunning(false)
    }
  }

  const resetCode = () => {
    setCode(`// Welcome to the Code Playground!
// Try editing this JavaScript code

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}`)
    setOutput("")
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code className="w-7 h-7 text-blue-600" />
            </motion.div>
            Interactive Code Playground
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </CardTitle>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Write, edit, and execute JavaScript code in real-time
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-2">JavaScript Code</span>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isRunning ? "Running..." : "Run"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={resetCode}
                    className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-80 p-4 bg-slate-900 text-green-400 font-mono text-sm rounded-xl border-2 border-slate-700 focus:border-blue-500 resize-none shadow-inner transition-all duration-300"
                placeholder="Write your JavaScript code here..."
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Output Console</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-80 p-4 bg-slate-900 text-white font-mono text-sm rounded-xl border-2 border-slate-700 overflow-y-auto shadow-inner"
              >
                {isRunning ? (
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full"
                    />
                    <span className="text-green-400">Executing code...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap text-green-300">
                    {output || "💡 Click 'Run' to execute your code and see the magic happen!"}
                  </pre>
                )}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800"
          >
            <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
              🚀 <strong>Pro Tip:</strong> Try modifying the Fibonacci function or write your own algorithms!
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
