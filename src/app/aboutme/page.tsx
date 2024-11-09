import React from "react";

import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Image from "next/image";
function Aboutme() {
  return (
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

<section className="relative flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto py-16 px-6 gap-16 md:gap-32 bg-gradient-to-b from-blue-100 via-white to-blue-50 shadow-xl rounded-lg">
   {/* Image Container with Floating Effect  */}
  <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-500">
    <Image src="/My Image.jpeg" alt="image" width="313" height="600" className="w-80 rounded-lg shadow-2xl border-4 border-blue-500 transition-transform duration-500 transform hover:rotate-3 hover:shadow-2xl hover:scale-105" />
  </div>

  {/* <!-- Text Container with Info Cards --> */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
    <h1 className="text-5xl font-extrabold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
      About Me
    </h1>
    <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
      My name is Abdul Saboor, a skilled Frontend and Backend Developer from Pakistan with expertise in technologies like HTML, CSS, TypeScript, and Next.js. I bring a strong eye for design, utilizing tools like Figma and Canva to create polished, user-friendly interfaces.
    </p>

    {/* <!-- Interactive Info Cards --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <p className="font-bold text-gray-600">Name</p>
        <p className="text-gray-700">Abdul Saboor</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <p className="font-bold text-gray-600">Date of Birth</p>
        <p className="text-gray-700">April 21, 2005</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <p className="font-bold text-gray-600">Address</p>
        <p className="text-gray-700">Karachi, Pakistan</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <p className="font-bold text-gray-600">Zip Code</p>
        <p className="text-gray-700">7900</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <p className="font-bold text-gray-600">Email</p>
        <p className="text-gray-700">abdulsaboorarif73@gmail.com</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <p className="font-bold text-gray-600">Phone</p>
        <p className="text-gray-700">03132301804</p>
      </div>
    </div>

    {/* <!-- Read More Button with Glow Effect --> */}
    <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:from-purple-500 hover:to-blue-500">
      Read More
    </button>
  </div>
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
  );
}
export default Aboutme;
