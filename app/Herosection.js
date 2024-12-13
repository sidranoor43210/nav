"use client"
import React from "react";

const Herosection = () => {
    return (
        <section className="relative bg-gray-800 text-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold  mb-6">
                        Welcome to Our Amazing Service
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        We provide solutions that help you grow your business and reach new heights.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-yellow-500 text-gray-800 font-semibold py-3 px-6
             rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );};
export default Herosection;
