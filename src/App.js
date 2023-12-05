import { ToastContainer } from "react-toastify";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NewsBoard from "./components/NewsBoard";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/articles" element={<NewsBoard />} />
      </Routes>
    </div>
  );
}

export default App;
