import React, { useState } from "react";

const Tabs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabClick = () => {
        // Open the modal for registration
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Tab Header */}
            <div className="flex justify-between items-center p-5 border-b">
                <div className="relative">
                    <span className="text-sm text-red-500 absolute -top-2 right-0">Paid</span>
                    <h2 className="text-xl font-bold cursor-pointer" onClick={handleTabClick}>
                        Advanced Quests
                    </h2>
                </div>
                {/* Additional tab headers can go here */}
            </div>

            {/* Modal for Registration Notification */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-5 shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Register to be Notified</h3>
                        <p className="text-gray-700 mb-4">
                            To access advanced quests, please register to be notified when they are available.
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border p-2 w-full rounded mb-4"
                        />
                        <button
                            className="bg-blue-500 text-white rounded px-4 py-2"
                            onClick={() => {
                                // Handle registration logic
                                alert("Registered for notifications!");
                                closeModal();
                            }}
                        >
                            Register
                        </button>
                        <button
                            className="text-gray-500 mt-2 block"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tabs;
