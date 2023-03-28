import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import BlogScreen from "./screens/BlogScreen/BlogScreen";
// import UploadScreen from './screens/UploadScreen/UploadScreen';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/blog/:id" element={<BlogScreen />} />
        {/* <Route path="/upload" element={<UploadScreen />} /> */}
      </Routes>
    </div>
  );
}

export default App;
