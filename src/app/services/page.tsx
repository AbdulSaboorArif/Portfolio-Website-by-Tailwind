import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Image from "next/image";

function Services() {
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
<section className="py-20 px-4 text-center  bg-gradient-to-b from-blue-100 via-white to-blue-50 shadow-xl rounded-lg">
  <h1 className="text-4xl font-bold text-blue-800 mb-10  from-blue-7000 to-purple-900 animate-pulse">Services</h1>
  
  <div className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto ">
     {/* Service Box */}
    <div className="w-full sm:w-1/2 lg:w-1/3 max-w-xs p-6 bg-red-100 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl duration-300">
      <div className="h-full">
        <h3 className="text-2xl font-semibold text-blue-800 mb-3 bg-red-100">Frontend Development</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          I specialize in creating responsive and interactive frontend interfaces ensuring a smooth and engaging user experience.
          Using technologies like HTML, CSS, Tailwind CSS, and TypeScript, I design visually appealing layouts that are optimized
          for performance and accessibility.
        </p>
      </div>
    </div>

   {/* Service Box  */}
    <div className="w-full sm:w-1/2 lg:w-1/3 max-w-xs p-6 bg-green-200 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl duration-300">
      <div className="h-full">
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">Backend Development</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          My backend development services are focused on building robust and scalable server-side solutions that power applications
          securely and efficiently. Leveraging modern frameworks and best practices, I develop APIs, manage databases, and ensure seamless
          integration with frontend components.
        </p>
      </div>
    </div>

     {/* Service Box --> */}
    <div className="w-full sm:w-1/2 lg:w-1/3 max-w-xs p-6 bg-yellow-200 -rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl duration-300">
      <div className="h-full">
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">Full Stack Web Development</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          As a full stack developer, I provide end-to-end solutions from frontend design to backend functionality. I develop cohesive,
          fully integrated web applications that are both visually appealing and technically sound, with a focus on performance and security.
        </p>
      </div>
    </div>

    {/* <!-- Service Box --> */}
    <div className="w-full sm:w-1/2 lg:w-1/3 max-w-xs p-6 bg-blue-200 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl duration-300">
      <div className="h-full">
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">Figma Design</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          My Figma design services bring your ideas to life with modern, user-centered layouts and prototypes. I create wireframes,
          interactive prototypes, and high-fidelity designs that ensure usability, brand consistency, and a visually compelling experience.
        </p>
      </div>
    </div>
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
export default Services;
