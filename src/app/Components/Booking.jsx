

function Booking() {

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <form className="w-full max-w-2xl bg-gray-900 p-10 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Book Now</h2>

                    <div className="mb-4">
                        <label class="block mb-2 text-sm font-medium">Customer Name</label>
                        <input
                            type="text"
                            className="w-full border rounded-md px-3 py-2"
                            placeholder="Enter your Name"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium">Contect Number</label>
                        <input
                            type="password"
                            className="w-full border rounded-md px-3 py-2"
                            placeholder="Enter your Number"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium">Event date</label>
                        <input
                            type="date"
                            className="text-white w-full border rounded-md px-3 py-2"
                            placeholder="Enter your Number"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium">Address</label>
                        <input
                            type="text"
                            className="text-white w-full border rounded-md px-3 py-2"
                            placeholder="Enter your Address"
                        />
                    </div>

    

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    );
}

export default Booking;