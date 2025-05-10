"use client"

import { CheckCircle, DollarSign, Upload } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
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
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process makes selling your software licenses quick and hassle-free.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm dark:border-gray-800"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Upload className="h-8 w-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">1. Upload License</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-center">
              Submit your license details through our secure portal. We support all major software vendors.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm dark:border-gray-800"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">2. Get Valuation</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-center">
              Receive a competitive market valuation within 24 hours based on current demand and license type.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm dark:border-gray-800"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">3. Get Paid</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-center">
              Accept our offer and receive payment via your preferred method within 3-5 business days.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
