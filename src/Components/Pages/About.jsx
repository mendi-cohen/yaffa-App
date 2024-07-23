import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="profile-picture-container">
        <div className="profile-picture"></div>
      </div>
      <div className="about-content">
        <h1> ?מי אני </h1>

        <div className="personal-info">
          <h2>שמי יפה כהן</h2>
          <p> נשואה באושר ואמא ל3 ילדים מתוקים </p>
          <p>
            {" "}
            מחנכת חינוך מיוחד במקצועי כבר למעלה מעשור, בעלת תואר שני בחינוך
            ובעלת תעודה בהנחיית הורים{" "}
          </p>
          <p>התשוקה שלי היא לעזור לאנשים להשיג את מטרותיהם</p>
        </div>
      </div>
      <div className="about-content">
        <h1> ?מהי משפחה צומחת </h1>
        <div className="personal-info">
          <p>
            .אנו ב'משפחה צומחת' מאמינים שלהורות יש משמעות גדולה ואחריות עצומה.
          </p>

          <p>
            האתר נבנה כדי להעניק להורים כלים מעשיים ומועילים לחינוך הילדים
            וליצירת אווירה משפחתית מאושרת 
            ומחונכת
          </p>
          <p>
           ! אשמח לשתף אתכם מהידע והניסיון שלי כדי לסייע להגיע למימוש והצלחה בתחום חינוך הילדים בחיוך ובשמחה 
           
          </p>
          <p>
      
            כאן באתר תוכלו לקבוע פגישות ייעוץ ולבצע מעקב מסודר אחרי התהליך שלכם
            שלב אחר שלב
          </p>
        </div>
      </div>
    </div>
  );
}
