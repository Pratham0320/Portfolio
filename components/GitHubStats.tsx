"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GitBranch, Star, Users, Activity } from "lucide-react"

interface GitHubData {
  public_repos: number
  followers: number
  following: number
  total_commits?: number
}

export default function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [githubData, setGithubData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Pratham0320")
        const data = await response.json()
        setGithubData(data)
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
        // Fallback data
        setGithubData({
          public_repos: 25,
          followers: 45,
          following: 30,
          total_commits: 500,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const stats = [
    {
      icon: GitBranch,
      label: "Public Repositories",
      value: githubData?.public_repos || 25,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      label: "Followers",
      value: githubData?.followers || 45,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      label: "Following",
      value: githubData?.following || 30,
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Activity,
      label: "Total Commits",
      value: githubData?.total_commits || 500,
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-50/50 dark:bg-slate-800/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GitHub Statistics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    >
                      <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                        {loading ? "..." : stat.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-slate-800 dark:text-white flex items-center justify-center gap-2">
                  <Github className="w-6 h-6" />
                  Contribution Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <p className="text-slate-600 dark:text-slate-300">
                    Active contributor with consistent coding practice and open-source involvement
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">500+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">DSA Problems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">25+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Organizations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Years Active</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
