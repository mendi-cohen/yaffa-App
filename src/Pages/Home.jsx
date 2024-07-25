import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
      <h1>משפחה צומחת</h1>
      <p>להורות עם משמעות וכלים מעשיים</p>
      </header>

      <section>
            <h2>"ברוכים הבאים ל"משפחה צומחת </h2>
            <p>אנו כאן כדי לספק לכם כלים מעשיים להורות טובה וליצירת משפחה מאושרת ומחונכת.</p>
        </section>

      <section className="features">
        <Link to="/meeting" className="feature-card">
          <i className="fas fa-heart"></i>
          <h3> קבעו פגישה </h3>
          <p> תוכניות טיפול בקצב שלכם ובראש שלכם והכל מהלב </p>
          <p> !בדיסקרטיות מוחלטת </p>
        </Link>

        <Link to="/art" className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3> מאמרים </h3>
          <p> מאמרים חינוכיים וטיפים יעילים לחינוך ילדים בעידן המודרני</p>
        </Link>
        <Link to="/about" className="feature-card">
          <i className="fas fa-users"></i>
          <h3> אדותינו </h3>
          <p> כל המידע אודות האתר </p>
        </Link>
      </section>

 

      <section className="testimonials">
        <h2>מה הלקוחות שלנו אומרים</h2>
        <div className="testimonial">
          <p>"שירות מעולה! ממליץ בחום."</p>
          <span>- ישראל ישראלי</span>
        </div>
      </section>

      <footer>
        <p>© 2024 משפחה צומחת. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}