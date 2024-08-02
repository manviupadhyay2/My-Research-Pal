// src/aboutUs/index.jsx

import React from 'react';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { FaUsers, FaBrain, FaRocket } from 'react-icons/fa';

function AboutUs() {
  return (
    <div>
      <Header />

      <main className="p-6 max-w-4xl mx-auto text-center">
        {/* Introduction Section */}
        <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-6 text-primary">Algo Assassins</h1>
          <p className="text-xl font-semibold text-gray-800 mb-4">Way Beyond the Algorithm</p>
          <p className="text-lg text-gray-700 mb-4">
            At Algo Assassins, we're more than just coders; we're algorithm assassins, breaking free from conventional coding constraints.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We love to explore, we love to research, and we want you to enjoy the journey as much as we do. That's why we created "My Research Pal."
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our passionate team of innovators and tech enthusiasts is dedicated to transforming the research experience. We blend our expertise in AI, machine learning, software development, and user experience design to develop cutting-edge solutions that make academic research more efficient and accessible.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With this, we're pushing the boundaries of what's possible. Join us in redefining technology and transforming the research landscape. Let's make discovering new knowledge as exciting and seamless as possible!
          </p>
        </section>

        {/* Features Section */}
        <section className="my-12">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Values</h2>
          <div className="flex justify-around items-center flex-wrap gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-72">
              <FaUsers className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Community</h3>
              <p className="text-lg text-gray-700">
                We build strong communities through collaboration and shared goals.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-72">
              <FaBrain className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
              <p className="text-lg text-gray-700">
                We foster creativity and develop innovative solutions to complex problems.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-72">
              <FaRocket className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
              <p className="text-lg text-gray-700">
                We strive for excellence in everything we do, from research to development.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-6 text-primary">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            For any inquiries, please contact us at:
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> contact@myresearchpal.com
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;

