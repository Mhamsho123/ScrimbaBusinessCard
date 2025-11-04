import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="img-container">
          <img
            className="profile-img"
            src="/public/MohamadHamsho.PNG" // 👈 public folder reference
            alt="Mohamad Hamsho"
          />
        </div>

        <h1>Mohamad Hamsho</h1>
        <h2>Software Engineer</h2>

        <nav>
          <button>Email</button>
          <button>LinkedIn</button>
        </nav>
      </header>
    </>
  );
}
