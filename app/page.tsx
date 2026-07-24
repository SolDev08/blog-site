import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center mx-auto ">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Welcome to Next Blog
                <span className="text-blue-600">.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover amazing content, share your thoughts, and connect with
                a community of readers and writers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-flex sm:items-center">
                  <Link
                    href="/posts"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Explore Posts
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Why Choose Next Blog?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Built with modern web technologies for an amazing reading
              experience
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="md:col-span-1">
                <dt className="text-lg font-medium text-gray-900">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="ml-3">Fast & Efficient</span>
                  </div>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Optimized for performance with Next.js and modern web
                  technologies
                </dd>
              </div>

              <div className="md:col-span-1">
                <dt className="text-lg font-medium text-gray-900">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <span className="ml-3">Modern Design</span>
                  </div>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Clean, responsive design with Tailwind CSS for all devices
                </dd>
              </div>

              <div className="md:col-span-1">
                <dt className="text-lg font-medium text-gray-900">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="ml-3">Secure & Reliable</span>
                  </div>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Built with best practices and secure database connections
                </dd>
              </div>

              <div className="md:col-span-1">
                <dt className="text-lg font-medium text-gray-900">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <span className="ml-3">Easy to Use</span>
                  </div>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Intuitive interface for both readers and content creators
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Recent Posts Preview */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Recent Posts
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Check out what is new in our blog
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Post Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Getting Started with Next.js
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Next.js and how to build amazing web
                  applications.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>2 days ago</span>
                </div>
              </div>
            </div>

            {/* Post Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Prisma with SQLite
                </h3>
                <p className="text-gray-600 mb-4">
                  Setting up a local SQLite database with Prisma for
                  development.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>5 days ago</span>
                </div>
              </div>
            </div>

            {/* Post Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tailwind CSS Tips
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the art of styling with Tailwind CSS utility classes.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
