import { useState } from "react";
import "./envelope.css";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      <div
        className={`envelope ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="hearts">
            <span>💖</span>
            <span>💕</span>
            <span>💗</span>
            <span>💓</span>
            <span>💘</span>
            <span>💞</span>
            <span>💝</span>
  </div>
        <div className="paper">
          <h3>Happy valentine's day 💖</h3>
          <p>ขอให้ความรักเล็ก ๆ </p>
          <p>ทำให้หัวใจยิ้มได้เสมอนะคะ</p>
        </div>

        <div className="envelope-body"></div>
        <div className="envelope-flap"></div>
      </div>

      <p className="text">
        {open ? "กดเพื่อปิด" : "กดเพื่อเปิด"}
      </p>
    </div>
  );
}


