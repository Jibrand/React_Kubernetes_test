import React from "react";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../../components/SectionHeader.jsx";
import { FaDatabase, FaCloud, FaTerminal, FaLock } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../components/API.jsx";
import toast,{Toaster} from 'react-hot-toast';

const Feature = () => {
    const navigate = useNavigate()

    const featuresData = [
        {
            id: 1,
            icon: <FaDatabase size={40} />,  // Quest 1 icon
            title: "Quest 1",
            description: "Explore the security of S3 Buckets and identify misconfigurations.",
            isLocked: false,
        },
        {
            id: 2,
            icon: <FaCloud size={40} />,  // Quest 2 icon
            title: "Quest 2",
            description: "Dive into cloud instances and explore real-world vulnerabilities.",
            isLocked: false,
        },
        {
            id: 3,
            icon: <FaTerminal size={40} />,  // Quest 3 icon
            title: "Quest 3",
            description: "Master command-line techniques in AWS environments.",
            isLocked: false,
        },
    ];

    const lockedChallenges = Array(6).fill({
        id: null,  // IDs are not required since there's no interactivity
        icon: <FaLock size={40} />,
        isLocked: true,
    });

    const sendtologinORdashboard = () => {
        const token = Cookies.get('token');
        const id = Cookies.get('id');
        const auth = Cookies.get('auth');

        if (token === "" || id === "" || !token || !id) { toast.error('Please login first'); navigate('/login'); return; }
        else (window.location.href = `${Dashboard}/${id}`)
    }

    return (
        <section id="features" className="py-20 lg:py-25 xl:py-30">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                <SectionHeader
                    headerInfo={{
                        title: "AWS CTF FEATURES",
                        subtitle: "Unlock AWS Security Challenges",
                        description: `Explore a wide range of AWS testing challenges designed for security enthusiasts and cloud experts. Train with real-world scenarios to strengthen your AWS security skills.`,
                    }}
                />

                {/* Unlocked Features */}
                <div onClick={sendtologinORdashboard} className="cursor-pointer mt-12.5 p-5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                    {featuresData.map((feature, index) => (
                        <SingleFeature feature={feature} key={index} />
                    ))}
                </div>

                {/* Locked Challenges */}
                <div className="mt-12.5 p-5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                    {lockedChallenges.map((feature, index) => (
                        <SingleFeature feature={feature} key={`locked-${index}`} />
                    ))}
                </div>
            </div>
            <Toaster/>
        </section>
    );
};

export default Feature;
