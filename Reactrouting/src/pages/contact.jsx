export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Contact Us
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Have a question or want to get in touch? Send us a message.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea 
              placeholder="Write your message" 
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow text-sm mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
