import React, { useState, useEffect } from "react";
import "./App.css";

const MaryAsoroEditorial = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  const navTabs = [
    { name: "About", url: "#" },
    { name: "MaryInData", url: "#" },
    { name: "Food & Music", url: "#" },
    { name: "Ctrl B + V + log", url: "#" },
    { name: "Triathlon", url: "#" },
  ];

  return (
    <div className="bg-[#f3a833] min-h-screen text-black font-serif p-8 md:p-16">
      {/* --- TOP CLOCK & NAVIGATION --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
        <div className="text-left font-mono text-sm border-2 border-black p-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          SYSTEM_TIME: {time}
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          {navTabs.map((tab) => (
            <button
              key={tab.name}
              className="bg-[#eeedeb] border-2 border-black px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* QUOTE SECTION */}
        <div className="max-w-md">
          <p className="text-3xl md:text-4xl italic leading-tight text-zinc-800">
            “Do the best you can until you know better. Then when you know
            better, do better.”
          </p>
          <p className="text-xl mt-6 font-bold uppercase tracking-widest">
            — Maya Angelou
          </p>
        </div>

        {/* IMAGE/WINDOW SECTION */}
        <div className="relative">
          <div className="bg-white border-2 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Window Header */}
            <div className="border-b-2 border-black p-3 flex gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-black" />
              <div className="w-3 h-3 rounded-full border-2 border-black" />
              <div className="w-3 h-3 rounded-full border-2 border-black" />
            </div>

            <div className="p-8 md:p-16 relative min-h-[400px]">
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                ABSOLUTE
              </h2>
              <p className="text-xl italic mt-4 text-zinc-600">
                Premium access
                <br />
                to my day-to-day
              </p>

              {/* This is where your photo goes */}
              <div className="absolute bottom-0 right-0 w-2/3">
                <div className="bg-zinc-200 aspect-square border-t-2 border-l-2 border-black flex items-end justify-center">
                  <span className="mb-4 text-zinc-400 font-mono text-xs">
                    [ PHOTO_LAYER ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32 text-center font-mono text-xs uppercase tracking-[0.5em] border-t-2 border-black pt-8">
        Mary Asoro // Software Engineer // © 2026
      </footer>
    </div>
  );
};

export default MaryAsoroEditorial;
