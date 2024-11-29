import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Welcome to Your Creative Space
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover, create, and share amazing art with our tools.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg shadow hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Features</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to bring your creativity to life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="border border-black shadow-black bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-500">
                Custom Design Tools
              </h3>
              <p className="mt-2 text-gray-600">
                Use our intuitive tools to create stunning designs effortlessly.
              </p>
            </div>
            <div className="border border-black shadow-black bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-500">
                Showcase Your Art
              </h3>
              <p className="mt-2 text-gray-600">
                Display your work in a vibrant and interactive gallery.
              </p>
            </div>
            <div className=" border border-black bg-white shadow-md shadow-black rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-500">
                Community Support
              </h3>
              <p className="mt-2 text-gray-600">
                Join a community of passionate artists and art lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-purple-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4">
            Join our platform today and start creating amazing designs.
          </p>
          <button className="mt-8 px-8 py-3 bg-pink-500 font-semibold rounded-lg shadow-lg hover:bg-pink-600">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
