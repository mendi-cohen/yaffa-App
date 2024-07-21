import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>ברוכים הבאים לאתר שלנו</h1>
        <p>כאן תוכלו למצוא את כל המידע הדרוש לכם</p>
        <Link to="/signin" className="cta-button">הצטרפו עכשיו</Link>
      </header>

      <section className="features">
        <div className="feature-card">
          <i className="fas fa-heart"></i>
          <h3> שירות </h3>
          <p> ! תוכניות טיפול בקצב שלכם ובראש שלכם והכל מהלב </p>
        </div>
        <div className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3>פרטיות</h3>
          <p> הדיסקרטיות שלכם היא במקום הראשון </p>
        </div>
        <div className="feature-card">
          <i className="fas fa-users"></i>
          <h3> אדותינו </h3>
          <p> כל המידע אודות האתר שלי </p>
          <Link to="/about" className="cta-button"> לפרטים </Link>
        </div>
      </section>

      <section className="about">
        <h2> ?מי אני </h2>
        <p>  שמי יפה כהן במקצועי אני מתחום החינוך המיוחד בעלת תואר שני בחינוך ומומחית בהנחיית הורים כאן לשירותיכם  </p>
      </section>

      <section className="testimonials">
        <h2>מה הלקוחות שלנו אומרים</h2>
        <div className="testimonial">
          <p>"שירות מעולה! ממליץ בחום."</p>
          <span>- ישראל ישראלי</span>
        </div>
      </section>

      <footer>
        <p>© 2024 האתר שלך. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}