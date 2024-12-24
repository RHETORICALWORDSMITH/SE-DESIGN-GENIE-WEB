import { useState } from "react";
import axios from "axios";

const Design = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleGenerateImage = async (event) => {
    event.preventDefault();

    if (!prompt.trim()) {
      setError("Please provide a prompt!");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/clipdrop", // Use backend server's URL
        { prompt }, // Request body
        {
          responseType: "blob", // Expecting a blob (binary data) in the response
        }
      );

      // Convert the response Blob to an image URL
      const imageUrl = URL.createObjectURL(response.data);
      setImageUrl(imageUrl); // Set the generated image URL
    } catch (err) {
      setError("Failed to generate image. Please try again later." + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 mb-32 max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-white rounded-3xl shadow-xl transition-all">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-8">
        Design Generator
      </h1>

      <form onSubmit={handleGenerateImage} className="space-y-6">
        <div>
          <label
            htmlFor="prompt"
            className="block text-lg font-semibold text-gray-700"
          >
            Enter your prompt:
          </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={handleInputChange}
            placeholder="e.g., A futuristic city landscape"
            className="mt-3 w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder-gray-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Design"}
          </button>
        </div>
      </form>

      {loading && (
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {imageUrl && !loading && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
            Generated Design
          </h2>
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt="Generated Design"
              className="w-1/2 h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;
