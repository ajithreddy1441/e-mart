import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 underline">Contact Us</h1>
          <p className="text-gray-400 text-xl">We'd love to hear from you! Send us a message using the form below.</p>
        </div>
        <form className="bg-gray-200 p-8 rounded-lg shadow-md">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your name"
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
            />
          </div>
          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-3 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your message"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className=" bg-blue-600 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
