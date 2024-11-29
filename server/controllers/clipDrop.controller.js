import fetch from "node-fetch"; // Import node-fetch for making requests
import FormData from "form-data"; // Import form-data to handle FormData in Node.js

export const clipDrop = async (req, res) => {
  const { prompt } = req.body; // Get prompt from the body
  const key = process.env.CLIP_URI;

  try {
    // Create FormData with the prompt
    const form = new FormData();
    form.append("prompt", prompt);

    // Send POST request to the Clipdrop API
    const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": key, // Replace with your actual API key
      },
      body: form,
    });

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    // Get the image as an ArrayBuffer (binary data)
    const buffer = await response.arrayBuffer();

    // Convert ArrayBuffer to a Buffer (for node.js)
    const nodeBuffer = Buffer.from(buffer);

    // Optional: Save the image to the server
    // fs.writeFileSync('generated_image.jpg', nodeBuffer); // Save image locally

    // Send the image buffer as a response to the frontend
    res.set("Content-Type", "image/jpeg"); // Set the content type for the image
    res.send(nodeBuffer); // Send the image data to the client
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate image. Please try again later.");
  }
};
