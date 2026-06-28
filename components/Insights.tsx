import React from "react";

const Insights: React.FC = () => {
  return (
    <section id="insights" style={{ background: "#0d1b2a", padding: "4rem 2rem", minHeight: "100vh" }}>
      <p style={{ color: "#00e5a0", fontSize: "12px", letterSpacing: "0.1em", marginBottom: "6px" }}>
        ● THOUGHT LEADERSHIP
      </p>
      <h2 style={{ color: "#ffffff", fontFamily: "monospace", fontSize: "2rem", marginBottom: "0.5rem" }}>
        My Insights._
      </h2>
      <p style={{ color: "#7a9bb5", fontSize: "14px", marginBottom: "2rem" }}>
        Pictorial posts I share on LinkedIn.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
        <img src="/post1.png" alt="Post 1" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="/post2.png" alt="Post 2" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="/post3.png" alt="Post 3" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="/post4.png" alt="Post 4" style={{ width: "100%", borderRadius: "12px" }} />
      </div>
    </section>
  );
};

export default Insights;
