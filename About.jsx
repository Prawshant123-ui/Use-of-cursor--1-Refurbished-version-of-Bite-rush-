import React from "react";

export default function About() {
  return (
    <div className="bg-[#fef1e6] min-h-screen px-6 py-12 text-orange-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">About BiteRush</h1>
        <p className="text-lg mb-8">
          At <span className="font-semibold text-orange-500">BiteRush</span>, we’re passionate about delivering delicious, fresh meals
          right to your doorstep. Whether you’re looking for comfort food,
          healthy eats, or something in between, we’ve got you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-orange-600">Our Mission</h2>
            <p>
              To make mealtime easier and tastier for everyone by providing a seamless,
              affordable, and high-quality food delivery experience.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-orange-600">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Fresh, locally sourced ingredients</li>
              <li>Fast and reliable delivery</li>
              <li>Wide variety of cuisines</li>
              <li>Easy online ordering</li>
            </ul>
          </div>
        </div>
         <div className="max-w-4xl mx-auto text-center">
        <p>Made by Prashant sharma as a part of React Js practice project(Frontend Only)...</p>
      </div>
        <div className="mt-10 text-sm text-orange-500">
          &copy; {new Date().getFullYear()} BiteRush. All rights reserved.
        </div>
      </div>
    </div>
  );
}
