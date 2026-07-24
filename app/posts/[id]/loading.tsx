export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-blue-600 border-t-transparent"></div>
        </div>

        {/* Loading Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading Post...</h2>
        <p className="text-lg text-gray-600 mb-8">Please wait while we fetch the content</p>

        {/* Progress Information */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Happening?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-gray-700 font-medium">Fetching post data</p>
                  <p className="text-sm text-gray-500">Retrieving post information from database</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-gray-700 font-medium">Loading media</p>
                  <p className="text-sm text-gray-500">Preparing images and content</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-gray-700 font-medium">Rendering page</p>
                  <p className="text-sm text-gray-500">Building the post layout</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">75% Complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}