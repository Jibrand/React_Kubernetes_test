import React from "react";
import SingleTrainingBlock from "./SingleTrainingBlock"; // Import the training block component
import SectionHeader from "../../components/SectionHeader.jsx";
import { FaDatabase, FaCloud, FaTerminal, FaLock } from "react-icons/fa";

const trainings = [
    {
        id: 1,
        title: "Cloud Security Fundamentals - AWS, Azure, GCP",
        description: "A comprehensive introduction to cloud security across major platforms, including essential concepts and practices.",
        author: "John Doe",
    },
    {
        id: 2,
        title: "AWS Cloud Security Fundamentals",
        description: "Learn the basics of AWS security principles and best practices for securing cloud applications and data.",
        author: "Jane Smith",
    },
    {
        id: 3,
        title: "AWS Cloud - Cloud Security Engineers",
        description: "Explore roles and responsibilities of cloud security engineers in AWS, including tools and techniques for securing cloud environments.",
        author: "Emily Johnson",
    },
    {
        id: 4,
        title: "AWS Cloud - EKS Security Engineers",
        description: "Dive into the security practices for Amazon EKS, covering deployment strategies, monitoring, and incident response.",
        author: "Michael Brown",
    },
    {
        id: 5,
        title: "AWS Cloud - Cloud Security Architects",
        description: "Design and implement secure AWS architectures, focusing on best practices and risk management strategies.",
        author: "Sarah Wilson",
    },
    {
        id: 6,
        title: "AWS Cloud Purple Team - Hackers, Builders & IRs",
        description: "Collaborate between offensive and defensive teams in AWS, enhancing security through shared knowledge and practices.",
        author: "David Lee",
    },
];



const Feature = () => {
    return (
        <section id="features" className="py-20 lg:py-25 xl:py-30">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                <SectionHeader
                    headerInfo={{
                        title: "AWS Cloud Security Training",
                        subtitle: "Enhance Your Skills with Expert-Led Courses",
                        description: `Discover our specialized training programs tailored for cloud security professionals. Each course offers in-depth knowledge and practical skills to tackle real-world security challenges in AWS, Azure, and GCP environments. Enhance your expertise in cloud security fundamentals and advanced engineering practices.`,
                    }}

                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4">
                    {trainings.map((training) => (
                        <SingleTrainingBlock key={training.id} training={training} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
