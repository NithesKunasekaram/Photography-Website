

function Navbar() {

    return(
        <>

        <div className="flex justify-between items-center p-5 border-b-4 rounded-2xl border-orange-500">

            <div className="text-orange-400 text-4xl font-bold">Grand<span className="text-orange-200">P</span>ic</div>

            <div className="flex gap-7 items-center">

                <div className="flex gap-7 text-gray-300">
                    <a href="#" className="hover:text-orange-500">PORTFOLIO</a>
                    <a href="#" className="hover:text-orange-500">ABOUT</a>
                    <a href="#" className="hover:text-orange-500">ALBUMS</a>
                    
                    

                </div>

                <div className="">
                    <button className="border rounded-xl py-2 px-5 bg-orange-500">Book Now</button>
                </div>
            </div>
        </div>

        </>
    );
}

export default Navbar;