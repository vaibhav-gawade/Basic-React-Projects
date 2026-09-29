export default function Home() {
  return (
    <>
    <main className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-12 md:flex-row md:gap-16 md:px-12">
      
      {/* Left Side: Your Picture */}
      <div className="w-full flex-1">
        <img 
          src="/hero-illustration.png" 
          alt="Developer illustration" 
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Right Side: Your Text */}
      <div className="w-full flex-1">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Welcome to DevSpace
        </h1>
        <p className="mb-4 text-base leading-relaxed text-gray-600">
          A simple React project built to learn routing, components, layouts, and navigation.
        </p>
        <p className="mb-6 text-base leading-relaxed text-gray-600">
          This project helps us understand how React Router works with layouts, nested routes, Link, NavLink, and Outlet.
        </p>
        <button className="rounded bg-[#d34b1a] px-6 py-3 font-medium text-white transition-colors hover:bg-[#b23e14]">
          Download now
        </button>
      </div>
    </main>

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">
          <img 
            src="/hero-bottom.png" 
            alt="Developer bottom illustration" 
            className="h-auto w-full object-contain"
          />
      </div>
    </>
  );
}