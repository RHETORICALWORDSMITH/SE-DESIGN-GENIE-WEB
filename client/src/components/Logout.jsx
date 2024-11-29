import React from "react";
import { useHistory } from "react-router-dom"; // You can use the useNavigate hook from react-router-dom v6

const Logout = () => {
  const history = useHistory(); // or useNavigate for react-router v6

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("userInfo");

    // Optionally, redirect the user to the login page after logging out
    alert("You have logged out successfully!");
    history.push("/login"); // Redirect to the login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Logout</h2>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Logout;
