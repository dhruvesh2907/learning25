import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=573b3c6c&i=${id}`);
        setDetail(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getMovieDetail();
  }, [id]);

  if (!detail) {
    return <h2 style={{ textAlign: "center", color: "white" }}>Loading...</h2>;
  }

  // Function to search for a YouTube trailer
  const searchYouTubeTrailer = () => {
    const query = encodeURIComponent(`${detail.Title} official trailer`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
  };

  return (
    <div style={styles.container}>
      {/* Movie Poster */}
      <div style={styles.posterContainer}>
        <img src={detail.Poster} alt={detail.Title} style={styles.poster} />
      </div>

      {/* Movie Details */}
      <div style={styles.details}>
        <h1 style={styles.title}>{detail.Title} ({detail.Year})</h1>
        <p style={styles.meta}>{detail.Runtime} | {detail.Genre} | {detail.Language}</p>
        <p style={styles.rating}>⭐ {detail.imdbRating} / 10 ({detail.imdbVotes} votes)</p>
        
        {/* Additional Details */}
        <p><strong>Director:</strong> {detail.Director}</p>
        <p><strong>Actors:</strong> {detail.Actors}</p>
        <p><strong>Production:</strong> {detail.Production}</p>
        <p><strong>Box Office:</strong> {detail.BoxOffice}</p>
        <p><strong>Awards:</strong> {detail.Awards}</p>

        {/* Storyline Section */}
        <p style={styles.plot}><strong>Storyline:</strong> {detail.Plot}</p>

        {/* YouTube Trailer Button */}
        <button style={styles.trailerButton} onClick={searchYouTubeTrailer}>
          🎬 Watch Trailer
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#222",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    margin: "50px auto",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
  },
  posterContainer: {
    flex: "1",
    padding: "10px",
  },
  poster: {
    width: "100%",
    borderRadius: "10px",
  },
  details: {
    flex: "2",
    padding: "20px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  meta: {
    fontSize: "16px",
    color: "#bbb",
  },
  rating: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  plot: {
    marginTop: "15px",
    lineHeight: "1.5",
    fontSize: "16px",
  },
  trailerButton: {
    backgroundColor: "#e50914",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "15px",
  },
};

