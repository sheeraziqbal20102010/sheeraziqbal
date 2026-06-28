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
    <section id="insights" style={{ background: "#0d1b2a", padding: "4rem 2rem" }}>
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
          <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div
              style={{ background: "#112233", border: "1px solid #1e3a52", borderRadius: "12px", overflow: "hidden", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#00e5a0";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1e3a52";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }}
                />
                {/* Topic Tag - top left */}
                <span style={{ position: "absolute", top: "10px", left: "10px", background: post.tagColor, color: "#0d1b2a", fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "4px", fontFamily: "monospace" }}>
                  {post.tag}
                </span>
                {/* Date Badge - top right */}
                <div style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(13,27,42,0.85)", border: "1px solid #1e3a52", borderRadius: "8px", padding: "4px 10px", textAlign: "center", fontFamily: "monospace" }}>
                  <div style={{ color: "#00e5a0", fontSize: "10px", fontWeight: 700 }}>{post.month}</div>
                  <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, lineHeight: 1 }}>{post.day}</div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "12px" }}>
                <p style={{ color: "#e0eaf4", fontSize: "13px", fontWeight: 600, margin: "0 0 8px", lineHeight: 1.4, fontFamily: "monospace" }}>
                  {post.title}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                  <span style={{ color: "#7a9bb5" }}>♥ {post.likes.toLocaleString()}</span>
                  <span style={{ color: "#7a9bb5" }}>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div style={{ textAlign: "center" }}>
        
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", border: "1px solid #00e5a0", color: "#00e5a0", padding: "10px 28px", borderRadius: "6px", fontFamily: "monospace", fontSize: "13px", textDecoration: "none" }}
        >
          // View all on LinkedIn →
        </a>
      </div>
    </section>
  );
};

export default Insights;
