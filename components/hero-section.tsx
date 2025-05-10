"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Maximize the Value of Your Unused Software Licenses
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Turn your idle software assets into cash. SoftSell makes it easy to sell your unused licenses at the best
              market rates.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-zinc-100 dark:bg-blue-200 dark:text-blue-900">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 dark:border-blue-200 dark:text-blue-200"
            >
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
