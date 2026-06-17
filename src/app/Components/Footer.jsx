import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {

    return (
        <>
            <div className="flex justify-between border-t-4 border-orange-500 rounded-2xl p-10 text-gray-300">

                <div className="">
                    <h1 className="">
                        © 2026 GrandPic Photography.
                    </h1>
                </div>

                <div className="flex gap-4">
                    <FaFacebookSquare size={20} />
                    <FaInstagramSquare size={20} />
                    <FaXTwitter size={20} />
                </div>

                <div className="">
                    <h1 className="">
                        Term & Condition
                    </h1>
                </div>

            </div>
        </>
    );
}

export default Footer;