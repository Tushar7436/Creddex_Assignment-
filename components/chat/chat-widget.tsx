"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { ExampleQuestions } from "./example-questions"
import { chatWithAI } from "@/app/actions/chat-action"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  text: string
  isUser: boolean
}
 
const EXAMPLE_QUESTIONS = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How long does payment take?",
  "Is my data secure?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm SoftSell's virtual assistant. How can I help you today?", isUser: false },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (message: string) => {
    // Add user message to chat
    setMessages((prev) => [...prev, { text: message, isUser: true }])
    setIsLoading(true)

    try {
      // Get AI response
      const response = await chatWithAI(message)

      if (response.error) {
        setMessages((prev) => [...prev, { text: response.error as string, isUser: false }])
      }
      if (response.text) {
        setMessages((prev) => [...prev, { text: response.text || "No response received.", isUser: false }]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again or contact our support team.",
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-xl w-[350px] h-[500px] max-w-[90vw] max-h-[80vh] border dark:border-gray-700"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h3 className="font-semibold dark:text-white">SoftSell Assistant</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
              ))}
              {isLoading && <ChatMessage message="" isUser={false} isLoading={true} />}
              <div ref={messagesEndRef} />
            </div>

            {/* Example questions */}
            {messages.length === 1 && (
              <div className="px-4">
                <ExampleQuestions questions={EXAMPLE_QUESTIONS} onSelect={handleSendMessage} isLoading={isLoading} />
              </div>
            )}

            {/* Chat input */}
            <div className="p-4 border-t dark:border-gray-700">
              <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
