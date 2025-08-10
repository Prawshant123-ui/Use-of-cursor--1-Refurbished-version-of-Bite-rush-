import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#fef1e6] min-h-screen px-6 py-12 text-orange-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-lg mb-10">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello — reach out.
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Email Us</h2>
            <p className="text-orange-500">support@biterush.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Call Us</h2>
            <p className="text-orange-500">+977 98000 12345</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow space-y-6">
          <div>
            <label className="block mb-1 font-medium text-orange-600">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-orange-600">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-orange-600">Message</label>
            <textarea
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-orange-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
