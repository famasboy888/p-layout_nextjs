import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <div className="hero mt-10 bg-base-100">
        <div className="hero-content text-center text-neutral">
          <div className="max-w-full">
            <h1 className="text-4xl md:text-7xl">
              PLAN & LAYOUT <br /> YOUR EVENT
            </h1>
            <p className="mt-10 py-6 text-gray-500 md:text-2xl">
              Let P-Layout help you plan and layout your event with ease
            </p>
            <Link
              href="/signup"
              className="bg-primary-gradient hover:border-1 btn border-base-100 text-white hover:border-purple-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center bg-secondary rounded-box max-w-full space-x-10 p-4 pt-10 mt-10">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="rounded-box" />
  </div>
</div>
    </div>
  );
}
