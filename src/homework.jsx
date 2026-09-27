import React from "react";

function Homework() {
  return (
    <div
      style={{
        width: "350px",
        margin: "40px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
        textAlign: "left",
      }}
    >
      <img
        src="animatiom1.jpg"
        alt="Blog"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "20px" }}>
        <h2 style={{ margin: "0 0 10px 0", fontSize: "22px", color: "#333" }}>
          Learn React Components
        </h2>
        <div
          style={{ fontSize: "13px", color: "#757575", marginBottom: "15px" }}
        >
          By Ahmad • Sep 2026
        </div>
        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          This is my second homework inside a custom JSX file!
        </p>
        <button
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default Homework;
