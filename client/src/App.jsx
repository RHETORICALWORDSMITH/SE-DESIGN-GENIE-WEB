import SignUp from "./components/Signup";
import Design from "./components/Design";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";


function App() {
  const [authUser] = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/design"
          element={authUser ? <Design /> : <Navigate to="/Signup" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
