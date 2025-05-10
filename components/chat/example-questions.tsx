"use client"

interface ExampleQuestionsProps {
  questions: string[]
  onSelect: (question: string) => void
  isLoading: boolean
}

export function ExampleQuestions({ questions, onSelect, isLoading }: ExampleQuestionsProps) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Try asking:</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => !isLoading && onSelect(question)}
            disabled={isLoading}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  )
}
