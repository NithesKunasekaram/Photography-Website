import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";




function Albums() {

    return (
        <>
            <div className="p-5">

                <h1 className="px-5 text-2xl font-bold mb-4">Albums</h1>

                {/* <button className="m-8 border rounded-full px-5 py-1">Wedding</button>

                <div className="grid grid-cols-3 px-5 gap-4">

                    <div className="border rounded-lg p-4">
                        <img src="/birth1.jpg" alt="" className=" rounded-t-lg" />
                    </div>

                    <div className="border rounded-lg p-4">
                        <img src="/birth1.jpg" alt="" className="" />
                    </div>

                    <div className="border rounded-lg p-4">
                        <img src="/birth1.jpg" alt="" className="" />
                    </div>


                </div> */}


                {/* <button className="m-8 border rounded-full px-5 py-1">Birthday</button>

                <div className="grid grid-cols-3 px-5 gap-4">


                    <div className="border rounded-lg p-4">
                        <img src="/birth1.jpg" alt="" className="" />
                    </div>

                    <div className="border rounded-lg p-4">
                        <img src="/birth1.jpg" alt="" className="" />
                    </div>

                    <div className="border rounded-lg p-4">
                        <img src="/birth1.jpg" alt="" className="" />
                    </div>

                </div> */}


                {/* <button className="m-8 border rounded-full px-5 py-1">Events</button> */}

                <div className="grid grid-cols-3 px-5 gap-10 mx-25">


                    <div className="border border-orange-500 rounded-lg p-4">
                        <img src="/Akka3.jpeg" alt="" className="h-100 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />

                        <div className="py-3">
                            <h1 className="pb-2 text-xl font-semibold">Ramesh & selva - Wedding</h1>

                            <div className="flex gap-2 items-center pb-2">

                                <FaLocationDot size={20} className="text-red-500"/>

                                <p className="">Batticaloa - Sep 2025</p>

                            </div>

                            <hr className="text-gray-500"/>

                            <div className="flex justify-between mt-3 items-center">

                                <div className="flex gap-1">
                                    <IoMdPhotos size={20} className="text-blue-500"/>
                                    <p className="">560 Photos</p>
                                </div>

                                <div className="flex gap-2">
                                    <FaRegHeart size={20} className="text-red-500 transition hover:scale-150" />
                                    <p className="">1.2k</p>
                                </div>

                            </div>


                        </div>
                    </div>

                     <div className="border border-orange-500 rounded-lg p-4">
                        <img src="/Nithes1.jpg" alt="" className="h-100 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />

                        <div className="py-3">
                            <h1 className="pb-2 text-xl font-semibold">Nithesh - 21ST Birthday</h1>

                            <div className="flex gap-2 items-center pb-2">

                                <FaLocationDot size={20} className="text-red-500"/>

                                <p className="">Batticaloa - Sep 2023</p>

                            </div>

                            <hr className="text-gray-500"/>

                            <div className="flex justify-between mt-3 items-center">

                                <div className="flex gap-1">
                                    <IoMdPhotos size={20} className="text-blue-500"/>
                                    <p className="">420 Photos</p>
                                </div>

                                <div className="flex gap-2">
                                    <FaRegHeart size={20} className="text-red-500 transition hover:scale-150" />
                                    <p className="">4.3k</p>
                                </div>

                            </div>


                        </div>
                    </div>

                     <div className="border border-orange-500 rounded-lg p-4">
                        <img src="/Birthday.jpeg" alt="" className="h-100 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-120" />

                        <div className="py-3">
                            <h1 className="pb-2 text-xl font-semibold">Salini - 18th Birthday</h1>

                            <div className="flex gap-2 items-center pb-2">

                                <FaLocationDot size={20} className="text-red-500"/>

                                <p className="">Batticaloa - May 2026</p>

                            </div>

                            <hr className="text-gray-500"/>

                            <div className="flex justify-between mt-3 items-center">

                                <div className="flex gap-1">
                                    <IoMdPhotos size={20} className="text-blue-500"/>
                                    <p className="">184 Photos</p>
                                </div>

                                <div className="flex gap-2">
                                    <FaRegHeart size={20} className="text-red-500 transition hover:scale-150" />
                                    <p className="">820</p>
                                </div>

                            </div>


                        </div>
                    </div>

                    

                            

                </div>

                <div className="flex justify-end mx-30 m-7">

                    <button className="border p-2 px-10 rounded-lg hover:bg-orange-500">View More</button>

                    </div>

            </div>

        </>
    );
}

export default Albums;