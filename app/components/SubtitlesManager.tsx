"use client";
import React, { useState } from "react";

const SubtitleManager: React.FC = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchSubtitles = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/processSubtitles?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Failed to fetch subtitles.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={fetchSubtitles} disabled={loading}>
        {loading ? "Processing..." : "Fetch Subtitles"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default SubtitleManager;
