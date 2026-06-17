import Image from "next/image";

function Hero() {

    return(

        <div className="grid grid-cols-2 bg-black h-screen">

            <div className="py-20 pl-10 flex flex-col justify-center">

                <p className="text-orange-200">Wedding · Birthday · Events</p>

                <h1 className="text-7xl font-bold">Every moment</h1>

                <div className="text-7xl font-bold">
                    <h1 className="">deserves to</h1> 
                    <h1 className="text-orange-400"> last forever</h1>
                </div>

                <p className=""></p>

                <div className="flex gap-4 py-4">
                    <button className="border rounded-xl p-2 bg-orange-500 px-5 hover:bg-orange-600">View portfolio</button>

                    <button className="border rounded-xl p-2 bg-orange-500 px-5 hover:bg-orange-600">Watch our Album</button>

                </div>
            </div>

            {/* image */}
            <div className="">
                <img src="/Hero2.png" alt="" className="h-full w-full object-cover transition-transform duration-500 animate-pulse" />
            </div>
        </div>
    );
}

export default Hero;