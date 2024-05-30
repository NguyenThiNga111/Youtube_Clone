// Youtube.js
import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "./Navbar";
import VideoGrid from "./VideoGrid";
import ScrollableSidebar from "../../components/ScrollableSidebar";
import VideoList from "../../components/VideoList"; // Import the VideoList component
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style_youtube/Youtube.css";

const Youtube = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="outer-container">
      <div className="container-fluid">
        <Header
          setSearchResults={setSearchResults}
          setLoading={setLoading}
          setError={(error) => console.error(error)}
          toggleMenu={toggleMenu} // Pass toggleMenu as a prop
        />
        <div className="row">
          <div className="col-md-2">
            <ScrollableSidebar />
          </div>
          <div className="col-md-10">
            <Navbar />
            <main>
              {loading ? (
                <div className="loading">Loading...</div>
              ) : searchResults.length > 0 ? (
                <VideoList videos={searchResults} />
              ) : (
                <VideoGrid />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
