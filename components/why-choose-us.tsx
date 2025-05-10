"use client"

import { ShieldCheck, TrendingUp, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-gray-900">
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
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SoftSell offers unique advantages that make us the preferred choice for software license resale.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold dark:text-white">Secure Transactions</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Our platform uses bank-level encryption and secure transfer protocols to protect your license data and
                financial information.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold dark:text-white">Best Market Rates</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Our extensive network of buyers ensures you get the highest possible value for your software licenses.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold dark:text-white">Fast Processing</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                From submission to payment, our streamlined process typically takes less than a week, compared to
                industry averages of 30+ days.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold dark:text-white">Expert Support</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Our team of licensing specialists is available to guide you through every step of the process and answer
                any questions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
