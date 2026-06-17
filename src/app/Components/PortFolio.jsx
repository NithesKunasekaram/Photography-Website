import Image from "next/image";

function PortFolio() {

    return (
        <>

            <div className="border-t-4 rounded-2xl border-orange-500 p-5">

                <h1 className="px-5 text-2xl font-bold mb-4">PortFolio</h1>

                <div className="px-5 grid grid-cols-2 mx-10">

                    <div className="grid grid-cols-1">

                    <div className="m-2">
                        <img src="/Akka1.jpeg" alt=""
                         className="h-80 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" 
                         />
                    </div>

                    </div>




                    <div className="grid grid-cols-2">

                    <div className="m-2">
                        <img src="/abilu1.jpeg" alt="" className="h-80 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />
                    </div>

                    <div className="m-2">
                        <img src="/birth1.jpg" alt="" className="h-80 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />
                    </div>

                    </div>

                    <div className="grid grid-cols-2">

                    <div className="m-2">
                        <img src="/Nithes1.jpg" alt="" className="h-80 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />
                    </div>

                    <div className="m-2">
                        <img src="/cake.jpg" alt="" className="h-80 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />
                    </div>

                    </div>

                    <div className="grid grid-cols-1">

                    <div className="m-2">
                        <img src="/Aththan3.jpeg" alt="" className="h-80 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />
                    </div>

                    </div>

                    
                </div>

            </div>

        </>
    );
}

export default PortFolio;