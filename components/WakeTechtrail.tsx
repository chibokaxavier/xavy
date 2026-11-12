"use client";
import { useEffect } from "react";

// Techtrail's backend is on Render's free plan, which sleeps after 15 minutes
// without traffic and takes up to a minute to start again. Calling it as soon
// as someone opens the portfolio gets it starting before they click Techtrail.
const TECHTRAIL_HEALTH_URL = "https://techtrail-x074.onrender.com/health";

const WakeTechtrail = () => {
  useEffect(() => {
    // no-cors: the request only has to reach Render; we never read the reply.
    fetch(TECHTRAIL_HEALTH_URL, { mode: "no-cors", cache: "no-store" }).catch(
      () => {}
    );
  }, []);

  return null;
};

export default WakeTechtrail;
