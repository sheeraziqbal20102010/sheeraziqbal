import React from "react";

const posts = [
  {
    id: 1,
    image: "/post1.png",
    title: "Write your first post title here",
    tag: "Python",
    tagColor: "#00e5a0",
    month: "Jun",
    day: "12",
    likes: 847,
    comments: 63,
    link: "https://www.linkedin.com/posts/your-post-url-1",
  },
  {
    id: 2,
    image: "/post2.png",
    title: "Write your second post title here",
    tag: "Career",
    tagColor: "#7ac94a",
    month: "May",
    day: "28",
    likes: 1200,
    comments: 114,
    link: "https://www.linkedin.com/posts/your-post-url-2",
  },
  {
    id: 3,
    image: "/post3.png",
    title: "Write your third post title here",
    tag: "Mentorship",
    tagColor: "#9b7de8",
    month: "May",
    day: "14",
    likes: 934,
    comments: 78,
    link: "https://www.linkedin.com/posts/your-post-url-3",
  },
  {
    id: 4,
    image: "/post4.png",
    title: "Write your fourth post title here",
    tag: "Tips",
    tagColor: "#e8a83d",
    month: "Apr",
    day: "30",
    likes: 672,
    comments: 49,
    link: "https://www.linkedin.com/posts/your-post-url-4",
  },
];

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
        Pictorial posts I share on LinkedIn — coding, mentorship and educator tips.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "2rem" }}>
        {posts.map((post) => (
