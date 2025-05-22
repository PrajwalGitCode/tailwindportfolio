// src/App.jsx
import React from 'react'
import profileImage from './assets/profile.jpg' 
import './index.css' 

function Hero() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-8">
            <div className="max-w-4xl text-center bg-zinc-900 shadow-lg p-8 rounded-lg border-4 border-cyan-500">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-cyan-500"
                />
                <h1 className="text-3xl font-bold mt-4 text-white">Hi, I'm Prajwal T</h1>
                <h1 className="text-xl mt-4 text-white">Bachelor of Engineering - Computer Science</h1>
                <p className="mt-4 text-zinc-300">
                    I'm a passionate frontend developer with experience in React and Tailwind CSS.
                    I love building clean, responsive user interfaces and learning new tech.
                </p>
                <button className="mt-6 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition">
                    Web Developer
                </button>
            </div>
        </div>
    )
}

export default Hero
