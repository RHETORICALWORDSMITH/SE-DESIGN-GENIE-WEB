import React, { useState } from "react";
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
      setError("Failed to generate image. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:mt-96 lg:mt-96 xl:96 mt-40 mb-56 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Design Generator
      </h1>

      <form onSubmit={handleGenerateImage} className="space-y-4">
        <div>
          <label
            htmlFor="prompt"
            className="block text-lg font-medium text-gray-700"
          >
            Enter your prompt:
          </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={handleInputChange}
            placeholder="e.g., A futuristic city landscape"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Design"}
          </button>
        </div>
      </form>

      {loading && (
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {imageUrl && !loading && (
        <div className="mt-8">
          <h2 className="text-xl font-medium text-center text-gray-800">
            Generated Design
          </h2>
          <div className="flex justify-center mt-4">
            <img
              src={imageUrl}
              alt="Generated Design"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;
