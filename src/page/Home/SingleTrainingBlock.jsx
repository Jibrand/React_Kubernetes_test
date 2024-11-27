import React, { useState, useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../components/API';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';

const SingleTrainingBlock = ({ training }) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const token = Cookies.get('token');
    const id = Cookies.get('id');
    const auth = Cookies.get('auth');

    const handleAddToWishlist = async (wishlistid, title) => {
        if (token === "" || id === "" || !token || !id) {
            toast.error('Please Login to add to wishlist');
            return;
        }

        // Create a loading toast and save its ID
        const loadingToastId = toast.loading('Adding to wishlist...');

        try {
            setLoading(true); // Optional: Hide loader on button

            const response = await axios.put(`${Api}/user/updateuserwishlist/${id}`, { token, title, wishlistid });
            if (response.status === 200) {
                toast.success('Added Successfully!');
            }

        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.message || 'Error adding to wishlist');
        } finally {
            // Dismiss the loading toast after the operation is complete
            toast.dismiss(loadingToastId);
            setLoading(false); // Hide loader
        }
    };

    return (
        <div className="max-w-sm p-6 cursor-pointer bg-hoverdark hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:text-white dark:hover:bg-hoverdark animate_top bg-transparent border border-gray-600 rounded-md flex flex-col justify-between h-full">
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-300">
                    {training.title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 text-md flex-grow">
                {training.description.length > 100 ? `${training.description.substring(0, 100)}...` : training.description}
            </p>
            <p className="text-sm italic text-gray-300">Author: {training.author}</p>
            <div className="mt-4">
                <button
                    onClick={() => handleAddToWishlist(training.id, training.title)} // Pass the title
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 transition-colors"
                >
                    <FaHeart className="mr-2" /> Add to Wishlist
                </button>
            </div>
            <Toaster />
        </div>
    );
};

export default SingleTrainingBlock;
