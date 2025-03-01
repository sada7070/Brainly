import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { TwitterPosts } from "./pages/TwitterPosts";
import { YoutubePosts } from "./pages/YoutubePosts";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/tweets" element={<TwitterPosts />} />
        <Route path="/dashboard/youtube" element={<YoutubePosts />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;