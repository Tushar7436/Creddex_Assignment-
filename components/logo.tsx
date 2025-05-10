import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  darkMode?: boolean
}

export function Logo({ className, darkMode = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-2xl", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600 dark:text-blue-400"
      >
        <rect x="4" y="4" width="24" height="24" rx="12" fill="currentColor" fillOpacity="0.2" />
        <path
          d="M10 16.5C10 14.0147 12.0147 12 14.5 12H17.5C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21H14.5C12.0147 21 10 18.9853 10 16.5Z"
          fill="currentColor"
        />
        <path d="M13 9C13 8.44772 13.4477 8 14 8H18C18.5523 8 19 8.44772 19 9V12H13V9Z" fill="currentColor" />
      </svg>
      <span className={darkMode ? "text-white" : "text-gray-900 dark:text-white"}>SoftSell</span>
    </div>
  )
}
