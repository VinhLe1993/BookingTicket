import React from "react";

export default function Detail(props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://picsum.photos/1000)",
          minHeight: "100vh",
          filter: "blur(4px)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-1/2 z-10" style={{
          backgroundImage:"url(https://picsum.photos/200/350)"
      }}>
        <h1>Example</h1>
      </div>
    </div>
  );
}
