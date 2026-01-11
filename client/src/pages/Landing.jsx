import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
    return (
        <div>
            <Navbar />
            <section
      className="text-gray-900"
      style={{
        background: "linear-gradient(135deg, #FA5C5C, #FD8A6B, #FEC288, #FBEF76)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Grow Your <span className="text-white">Cloud Kitchen</span> Business
          </h1>

          <p className="text-lg text-gray-800">
            Manage orders, menus, customers, and delivery seamlessly with a
            powerful all-in-one platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#FA5C5C] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#e14f4f] transition">
              Get Started
            </button>

            <button className="bg-white text-[#FA5C5C] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food Platform"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

      </div>
    </section>
        </div>
    )
}

export default Landing