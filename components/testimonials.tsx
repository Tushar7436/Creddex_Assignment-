"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Customer Testimonials
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm dark:border-gray-800"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Sarah Johnson"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold dark:text-white">Sarah Johnson</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">IT Director, TechCorp Inc.</p>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 italic">
              "SoftSell helped us recover over $50,000 from unused enterprise licenses after our company downsized. The
              process was incredibly smooth, and their valuation exceeded our expectations."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm dark:border-gray-800"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Michael Chen"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold dark:text-white">Michael Chen</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">CFO, Innovate Solutions</p>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 italic">
              "As a growing startup, managing our software budget is crucial. SoftSell not only helped us sell excess
              licenses but also connected us with discounted options for tools we needed. Their service has become an
              essential part of our IT asset management strategy."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
