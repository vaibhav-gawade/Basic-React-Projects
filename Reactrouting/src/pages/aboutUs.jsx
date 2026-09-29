export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About DevSpace
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          DevSpace is a small practice project created while learning
          React and React Router.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Why this project?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The goal is to understand how different React components work
            together instead of putting everything inside one file.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            What we use
          </h2>
          
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <li className="flex items-center justify-center bg-blue-50 text-blue-700 font-medium py-2 px-4 rounded-lg text-sm border border-blue-100">
              React
            </li>
            <li className="flex items-center justify-center bg-indigo-50 text-indigo-700 font-medium py-2 px-4 rounded-lg text-sm border border-indigo-100">
              React Router
            </li>
            <li className="flex items-center justify-center bg-yellow-50 text-yellow-800 font-medium py-2 px-4 rounded-lg text-sm border border-yellow-100">
              JavaScript
            </li>
            <li className="flex items-center justify-center bg-sky-50 text-sky-700 font-medium py-2 px-4 rounded-lg text-sm border border-sky-100">
              CSS
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}