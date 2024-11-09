import React from "react";

import { FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa';
import { SiVercel } from "react-icons/si";
import Image from "next/image";
function MYPortfolio () {
  return(
    <>
    <header className="flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
  <div className="flex items-center cursor-pointer">
    <Image src="/Web logo.png" alt="logo" width="109" height="110" />
  </div>

  <nav className="flex gap-5 text-lg font-medium text-black">
    <a href="/" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Home</a>
    <a href="/aboutme" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">About Me</a>
    <a href="/skills" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Skills</a>
    <a href="/services"className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Services</a>
    <a href="/contactme" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Contact Me</a>
  </nav>
</header>

<main className="min-h-screen py-16 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-b from-blue-100 via-gray-200 to-blue-100">
  <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 ">
    <h1 className="text-5xl font-bold leading-tight text-gray-800">
      Hi! <br/> I am <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Abdul Saboor</span>
    </h1>
    <h3 className="text-2xl font-medium text-gray-700">A Full Stack Developer</h3>
    <p className="text-lg font-medium text-gray-600 leading-relaxed max-w-md">
      I offer web services at competitive prices with high-quality, pixel-perfect websites.
      Features include SEO-friendly, high-ranking designs.
    </p>
    <div className="flex space-x-4">
      <button className="px-6 py-3 font-bold text-whitebg-gradient-to-r bg-blue-500 rounded-lg shadow-lg transform transition-transform duration-200 hover:bg-blue-700 hover:scale-105">Download CV</button>
      <button className="px-6 py-3 font-bold text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform duration-200 hover:bg-blue-700 hover:scale-105">Hire Me</button>
    </div>
  </div>
  
  <div className="relative flex justify-center items-center max-w-xs transform transition-transform duration-300 hover:scale-105">
    <Image src="/My Image.jpeg" alt="my image" className="rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300" width="213" height="400" />
  </div>
</main>

<footer className="py-10 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 text-black text-center md:text-left ">
  <div className="flex flex-col md:flex-row items-center md:justify-around space-y-6 md:space-y-0 text-black-700">
    <div className="flex flex-col items-center md:items-start space-y-2">
      <Image src="/Web logo.png" alt="Logo" width="123" height="110" />
    </div>
    <div className="space-y-1">
      <p><strong>Address:</strong> Karachi Pakistan</p>
      <p><strong>Phone:</strong> 03132301804</p>
      <p><strong>Email:</strong> abdulsaboorarif73@gmail.com</p>
    </div>
    <div className="flex flex-col space-y-1">
      <a href="/" className="hover:underline">Home</a>
      <a href="/aboutme" className="hover:underline">About Me</a>
      <a href="/skills" className="hover:underline">Skills</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/contactme" className="hover:underline">Contact Me</a>
    </div>
    <div className="flex space-x-4 text-2xl text-black-600">
      <a href="https://linkedin.com" className="hover:text-blue-700"><FaLinkedin /></a>
      <a href="https://youtube.com" className="hover:text-red-600"><FaYoutube /></a>
      <a href="https://vercel.com" className="hover:text-gray-700"><SiVercel /></a>
      <a href="https://github.com" className="hover:text-gray-800"><FaGithub /></a>
    </div>
  </div>
  <div className="mt-8 text-sm text-black-500 text-center">
    <p>&copy; 2024 Your Name or Brand. All rights reserved.</p>
  </div>
</footer>
      </>
  )
}
export default MYPortfolio



