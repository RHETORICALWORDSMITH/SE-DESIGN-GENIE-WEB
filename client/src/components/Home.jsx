import result from "../../public/result.jpg";
import result2 from "../../public/result2.jpg";
import result3 from "../../public/result3.jpg";
const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center max-w-screen-xl">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Welcome to Your Creative Space
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Discover, create, and share amazing art with our intuitive tools.
          </p>
          <div className="mt-8">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white">Our Features</h2>
          <p className="mt-4 text-gray-400">Everything you need to bring your creativity to life.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-700 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-400">Custom Design Tools</h3>
              <p className="mt-2 text-gray-300">
                Use our intuitive tools to create stunning designs effortlessly.
              </p>
            </div>
            <div className="bg-gray-700 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-400">Showcase Your Art</h3>
              <p className="mt-2 text-gray-300">
                Display your work in a vibrant and interactive gallery.
              </p>
            </div>
            <div className="bg-gray-700 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-400">Community Support</h3>
              <p className="mt-2 text-gray-300">
                Join a community of passionate artists and art lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Images Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white">Example Images</h2>
          <p className="mt-4 text-gray-400">Here are some images generated by our tool.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <img
              src={result}
              alt="Example 1"
              className="rounded-lg shadow-md transform transition duration-500 hover:scale-105"
            />
            <img
              src={result2}
              alt="Example 2"
              className="rounded-lg shadow-md transform transition duration-500 hover:scale-105"
            />
            <img
              src={result3}
              alt="Example 2"
              className="rounded-lg shadow-md transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-screen-xl">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-300">
            Join our platform today and start creating amazing designs.
          </p>
          <button className="mt-8 px-8 py-3 bg-pink-500 font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
