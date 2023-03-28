import React, { useState, useEffect } from "react";
import Header from "./../../components/Home/Header/Header";
import SearchBar from "./../../components/Home/SearchBar/SearchBar";
import BlogList from "./../../components/Home/BlogList/BlogList";
import EmptyList from "./../../components/common/EmptyList/EmptyList";
import axios from "axios";
import Footer from "./../../components/Home/Footer/Footer";

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get("/blog/get");
      setBlogs(res.data);
    };
    getBlogs();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  // Search Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  // search for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blogposts) =>
      blogposts.category.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogs);
    setSearchTerm("");
    window.location.reload(true);
  };
  console.log(blogs);
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchTerm}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchTerm(e.target.value)}
      />
      {/* Blog List and Empty List */}
      {blogs.length > 0 ? <BlogList blogs={blogs} /> : <EmptyList />}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
