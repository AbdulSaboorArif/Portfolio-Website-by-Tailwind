import React from "react";


import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Image from "next/image";

function skills() {
  return (
    <>
    <header className="flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
  <div className="flex items-center cursor-pointer">
    <Image src="/Web logo.png" alt="logo" width="123" height="110" />
  </div>

  <nav className="flex gap-5 text-lg font-medium text-black">
    <a href="/" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Home</a>
    <a href="/aboutme" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">About Me</a>
    <a href="/skills" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Skills</a>
    <a href="/services"className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Services</a>
    <a href="/contactme" className="hover:border-b-2 hover:border-yellow-500 pb-1 transition">Contact Me</a>
  </nav>
</header>

{/*  Skills Section */}
<section className="text-center py-20 px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto bg-gradient-to-b from-blue-100 via-white to-blue-50 shadow-xl rounded-lg">
  <h1 className="text-4xl font-bold  text-blue-800 mb-4  from-blue-600 to-purple-600 animate-pulse">Skills</h1>
  <p className="text-lg text-gray-700 font-medium mb-10 max-w-2xl mx-auto">
    This is my skill set. I have strong abilities in these skills. If you want to know more, feel free to contact me.
  </p>

  {/* <!-- Skills Image Grid with 3D Effects --> */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* <!-- Skill Card --> */}
    <div className="relative group transition-transform transform hover:rotate-3 hover:scale-105 duration-500">
      <img src="/HTml.jpeg" alt="HTML" className="w-full h-auto rounded-lg shadow-lg transform group-hover:rotate-6 group-hover:scale-105 duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 duration-300 flex items-end p-4 rounded-lg">
        <p className="text-white font-semibold text-lg">HTML</p>
      </div>
    </div>

    {/* <!-- Skill Card --> */}
    <div className="relative group transition-transform transform hover:rotate-3 hover:scale-105 duration-500">
      <img src="/css.jpeg" alt="CSS" className="w-full h-auto rounded-lg shadow-lg transform group-hover:rotate-6 group-hover:scale-105 duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 duration-300 flex items-end p-4 rounded-lg">
        <p className="text-white font-semibold text-lg">CSS</p>
      </div>
    </div>

    {/* <!-- Skill Card --> */}
    <div className="relative group transition-transform transform hover:rotate-3 hover:scale-105 duration-500">
      <img src="/js.jpeg" alt="JavaScript" className="w-full h-auto rounded-lg shadow-lg transform group-hover:rotate-6 group-hover:scale-105 duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 duration-300 flex items-end p-4 rounded-lg">
        <p className="text-white font-semibold text-lg">JavaScript</p>
      </div>
    </div>

    {/* <!-- Skill Card --> */}
    <div className="relative group transition-transform transform hover:rotate-3 hover:scale-105 duration-500">
      <img src="/next.jpeg" alt="Next.js" className="w-full h-auto rounded-lg shadow-lg transform group-hover:rotate-6 group-hover:scale-105 duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 duration-300 flex items-end p-4 rounded-lg">
        <p className="text-white font-semibold text-lg">Next.js</p>
      </div>
    </div>

    {/* <!-- Skill Card --> */}
    <div className="relative group transition-transform transform hover:rotate-3 hover:scale-105 duration-500">
      <img src="/figma.jpeg" alt="Figma" className="w-full h-auto rounded-lg shadow-lg transform group-hover:rotate-6 group-hover:scale-105 duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 duration-300 flex items-end p-4 rounded-lg">
        <p className="text-white font-semibold text-lg">Figma</p>
      </div>
    </div>

    {/* <!-- Additional Skill Card --> */}
    <div className="relative group transition-transform transform hover:rotate-3 hover:scale-105 duration-500">
      <img src="/image.png" alt="Additional Skill" className="w-full h-auto rounded-lg shadow-lg transform group-hover:rotate-6 group-hover:scale-105 duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 duration-300 flex items-end p-4 rounded-lg">
        <p className="text-white font-semibold text-lg">Tailwind CSS</p>
      </div>
    </div>
  </div>
</section>


<footer className="py-10 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 text-black text-center md:text-left">
  <div className="flex flex-col md:flex-row items-center md:justify-around space-y-6 md:space-y-0 text-black-700">
    <div className="flex flex-col items-center md:items-start space-y-2">
      <Image src="/Web logo.png" alt="Logo" width="106" height="100" />
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
export default skills;

      {/* <header className={styles.header}>
        <div className={styles.logo}>
        <Image src="/Web logo.png" alt="logo" width={109} height={110} />
        </div>

        <div className={styles.navbar}>
          <a href="/">Home</a>
          <a href="/aboutme">About Me</a>
          <a href="/skill">Skills</a>
          <a href="/services">Services</a>
          <a href="/contactme">Contact Me</a>
        </div>
      </header>
      <section className={styles.skills}>
        <h1>Skills</h1>
        <p>
          This is my some skill set I have very strong ability on this skills.
          If your want to check my experience level in this skill so you can
          contact me
        </p>
        <div className={styles.skillsimg}>
          <img src="/HTml.jpeg" alt="" />
        </div>
        <div className={styles.skillsimg}>
          <img src="/css.jpeg" alt="" />
        </div>
        <div className={styles.skillsimg}>
          <img src="/js.jpeg" alt="" />
        </div>
        <div className={styles.skillsimg}>
          <img src="/next.jpeg" alt="" />
        </div>
        <div className={styles.skillsimg}>
          <img src="/figma.jpeg" alt="" />
        </div>
        <div className={styles.skillsimg}>
          <img src="/image.png" alt="" />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.logoSection}>
          <Image src="/Web logo.png" alt="Logo" className={styles.logo}  width= {106}
  height={600}/>
          </div>

          <div className={styles.contactInfo}>
            <p>
              <strong>Address:</strong> Karachi Pakistan
            </p>
            <p>
              <strong>Phone:</strong> 03132301804
            </p>
            <p>
              <strong>Email:</strong> abdulsaboorarif73@gmail.com
            </p>
          </div>

          <div className={styles.footerNav}>
          <a href="/">Home</a>
          <a href="/aboutme">About Me</a>
          <a href="/skills">Skills</a>
          <a href="/services">Services</a>
          <a href="/contactme">Contact Me</a>
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/abdulsaboor-arif-ab9886285/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a
              href="https://www.youtube.com/@GOVERNOR-IT-COURSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className={styles.icon} />
            </a>
            <a
              href="https://vercel.com/abdul-saboors-projects-e549ab58"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVercel className={styles.icon} />
            </a>
            <a
              href="https://github.com/AbdulSaboorArif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Your Name or Brand. All rights reserved.</p>
        </div>
      </footer>
   */}
 
