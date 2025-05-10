export default function Footer() {
  return (
    <footer className="w-full py-6 bg-zinc-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">SoftSell</h2>
            <p className="text-zinc-400">Maximizing the value of your software assets</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-zinc-400">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
