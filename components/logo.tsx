import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  darkMode?: boolean
}

export function Logo({ className, darkMode = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-2xl", className)}>
      <span className={darkMode ? "text-white" : "text-gray-900 dark:text-white"}>SoftSell</span>
    </div>
  )
}
