import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-black min-h-screen">
      
     
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 text-center lg:text-left">
        
        <p className="text-orange-200 text-sm sm:text-base mb-4">
          Wedding · Birthday · Events
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Every moment
        </h1>

        <div className="font-bold mt-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            deserves to
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-400">
            last forever
          </h1>
        </div>

        <p className="text-gray-400 mt-6 max-w-lg mx-auto lg:mx-0">
          We capture your most precious memories with stunning photography
          and cinematic storytelling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
          <button className="rounded-xl py-3 px-6 bg-orange-500 hover:bg-orange-600 transition">
            View Portfolio
          </button>

          <button className="rounded-xl py-3 px-6 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition">
            Watch Our Album
          </button>
        </div>
      </div>

      
      <div className="relative min-h-[350px] lg:min-h-screen animate-pulse">
        <Image
          src="/Hero2.png"
          alt="Wedding Photography"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}