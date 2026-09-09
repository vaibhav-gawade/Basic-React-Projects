import {useState} from 'react';

function App() {
    const [color,setbgColor] = useState('bg-slate-500')
  return (

    <>
      <div className={`min-h-screen ${color} pt-10 text-center transition-all duration-500`}>
        <h1 onClick ={() => setbgColor('white')}className="inline-block p-4 rounded-3xl text-5xl font-light font-serif transition-all duration-500 hover:bg-linear-to-r hover:from-purple-600 hover:to-violet-600 hover:text-white cursor-pointer hover:font-extrabold mt-45 hover:">BACKGROUND CHANGER</h1>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 p-0.5 rounded-2xl bg-linear-to-r from-purple-500 via-pink-400 to-purple-500 animate-border-gradient shadow-xl">
        
          <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-[15px] flex gap-4 items-center">

            <button onClick = {() => setbgColor('bg-red-500')} className="px-5 py-2 bg-red-500 text-white font-medium rounded-2xl shadow-sm hover:bg-red-600 active:scale-95 transition-all cursor-pointer">RED</button>

            <button onClick = {() => setbgColor('bg-blue-500')} className="px-5 py-2 bg-blue-500 text-white font-medium rounded-2xl shadow-sm hover:bg-blue-600 active:scale-95 transition-all cursor-pointer">BLUE</button>

            <button onClick = {() => setbgColor('bg-purple-500')} className="px-5 py-2 bg-purple-500 text-white font-medium rounded-2xl shadow-sm hover:bg-purple-600 active:scale-95 transition-all cursor-pointer">PURPLE</button>

            <button onClick = {() => setbgColor('bg-purple-200')} className="px-5 py-2 bg-purple-200 text-white font-medium rounded-2xl shadow-sm hover:bg-purple-300 active:scale-95 transition-all cursor-pointer">LAVENDER</button>

            <button onClick = {() => setbgColor('bg-yellow-500')} className="px-5 py-2 bg-yellow-500 text-white font-medium rounded-2xl shadow-sm hover:bg-yellow-600 active:scale-95 transition-all cursor-pointer">YELLOW</button>

            <button onClick = {() => setbgColor('bg-violet-500')} className="px-5 py-2 bg-violet-500 text-white font-medium rounded-2xl shadow-sm hover:bg-violet-600 active:scale-95 transition-all cursor-pointer">VIOLET</button>

            <button onClick = {() => setbgColor('bg-gray-500')} className="px-5 py-2 bg-gray-500 text-white font-medium rounded-2xl shadow-sm hover:bg-gray-600 active:scale-95 transition-all cursor-pointer">GRAY</button>

            <button onClick = {() => setbgColor('bg-sky-500')} className="px-5 py-2 bg-sky-500 text-white font-medium rounded-2xl shadow-sm hover:bg-sky-600 active:scale-95 transition-all cursor-pointer">SKY</button>

            <button onClick = {() => setbgColor('bg-green-500')} className="px-5 py-2 bg-green-500 text-white font-medium rounded-2xl shadow-sm hover:bg-green-600 active:scale-95 transition-all cursor-pointer">GREEN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
