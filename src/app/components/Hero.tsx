import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Hello, I&apos;m John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-gray-400 transition-colors font-medium">
              Get In Touch
            </button>
          </div>
          
          <div className="pt-8">
            <ArrowDownIcon className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
} 