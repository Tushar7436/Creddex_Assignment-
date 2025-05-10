import { cn } from "@/lib/utils"

interface ChatMessageProps {
  message: string
  isUser: boolean
  isLoading?: boolean
}

export function ChatMessage({ message, isUser, isLoading = false }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2",
          isUser
            ? "bg-blue-600 text-white dark:bg-blue-700"
            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
        )}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
            <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
            <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{message}</p>
        )}
      </div>
    </div>
  )
}
