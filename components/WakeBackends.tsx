"use client";
import { useEffect } from "react";

// Techtrail's and Delidish's backends are on Render's free plan, which sleeps
// after 15 minutes without traffic and takes up to a minute to start again.
// Calling them as soon as someone opens the portfolio gets them starting
// before the visitor clicks through to either project.
const BACKEND_HEALTH_URLS = [
  "https://techtrail-x074.onrender.com/health",
  "https://delisdish-api.onrender.com/health",
];

const WakeBackends = () => {
  useEffect(() => {
    // no-cors: the requests only have to reach Render; we never read the replies.
    BACKEND_HEALTH_URLS.forEach((url) => {
      fetch(url, { mode: "no-cors", cache: "no-store" }).catch(() => {});
    });
  }, []);

  return null;
};

export default WakeBackends;
