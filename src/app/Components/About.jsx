import Image from "next/image";

function About () {

    return (
        <>

    <div id="about" className="lg:p-5 lg:grid grid-cols-2">


            <div className="">
                <img src="/camera1.jpg" alt="" className="h-100 w-full object-cover" />
            </div>

            <div className="bg-black">

                <h1 className="px-5 text-2xl font-bold mb-4">About</h1>

                <div className="p-5 text-xl text-gray-400">

                    <p className="pb-3">
                        Hi, I'm Nithes, a passionate photographer dedicated to capturing authentic moments and timeless memories. With a keen eye for detail and a love for storytelling, I specialize in creating images that reflect genuine emotions and unique personalities.
                    </p>

                    <p className="pb-3">
                        Whether it's portraits, weddings, events, landscapes, or commercial photography, my goal is to turn meaningful moments into lasting visual stories. I believe every photograph should not only look beautiful but also preserve the feeling behind the moment.
                    </p>

                    <p className="">
                        Thank you for visiting my portfolio. I look forward to helping you capture memories that last a lifetime.
                    </p>

                </div>

            </div>
        </div>

        </>
    ); 
}

export default About;