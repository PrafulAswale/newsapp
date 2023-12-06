import { ToastContainer } from "react-toastify";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { Route, Routes, useParams } from "react-router-dom";
import NewsBoard from "./components/NewsBoard";
import NewsFavorite from "./components/NewsFavorite";

function App() {
  const { id } = useParams();
  return (
    <div>
      <ToastContainer />
      <Navbar id={id} />
      <Routes>
        <Route path="/" element={<NewsBoard />} exact />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} exact />
        <Route
          path={`/user/${id}/favorites`}
          element={<NewsFavorite id={id} />}
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
