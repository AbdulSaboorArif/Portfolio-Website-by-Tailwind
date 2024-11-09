
import React from "react"

import { FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa';
import { SiVercel } from "react-icons/si";
import Image from "next/image";
function Contactme(){
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
        {/* <!-- Contact Me Section with Tailwind CSS --> */}
<section className="py-10 px-6 bg-blue-100 max-w-3xl mx-auto rounded-lg shadow-xl">
  <h1 className="text-3xl font-bold text-center mb-6 text-gray-800  from-blue-600 to-purple-600 animate-pulse">
    Contact <span className="text-blue-600">Me</span>
  </h1>

  <form action="" className="space-y-6 h-full">
    {/* <!-- Input Group --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <input type="text" placeholder="Full Name" 
          className="p-3 rounded-lg border border-gray-300 bg-white shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-transform duration-200 transform hover:-translate-y-1 focus:-translate-y-1 outline-none"/>
        
        <input type="email" placeholder="Email" 
          className="p-3 mt-4 rounded-lg border border-gray-300 bg-white shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-transform duration-200 transform hover:-translate-y-1 focus:-translate-y-1 outline-none"/>
      </div>
      
      <div className="flex flex-col">
        <input type="number" placeholder="Contact Number" 
          className="p-3 rounded-lg border border-gray-300 bg-white shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-transform duration-200 transform hover:-translate-y-1 focus:-translate-y-1 outline-none"/>
        
        <input type="text" placeholder="Subject" 
          className="p-3 mt-4 rounded-lg border border-gray-300 bg-white shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-transform duration-200 transform hover:-translate-y-1 focus:-translate-y-1 outline-none"/>
      </div>
    </div>

    {/* <!-- Textarea --> */}
    <div className="flex flex-col">
      <textarea  placeholder="Your Message" 
        className="p-3 rounded-lg border border-gray-300 bg-white shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-transform duration-200 transform hover:-translate-y-1 focus:-translate-y-1 outline-none resize-vertical"></textarea>
      
      <button type="submit" 
        className="mt-4 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg transform transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </div>
  </form>
</section>

<footer className="py-10 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 text-black text-center md:text-left">
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
export default Contactme