import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Stripe integration, and real-time inventory management.",
      image: "/project1.jpg",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      image: "/project2.jpg",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/username/taskapp",
      demo: "https://taskapp-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/project3.jpg",
      tech: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      github: "https://github.com/username/weather",
      demo: "https://weather-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with cutting-edge technologies and optimized for performance.",
      image: "/project4.jpg",
      tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.com"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-lg font-medium">{project.title}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 