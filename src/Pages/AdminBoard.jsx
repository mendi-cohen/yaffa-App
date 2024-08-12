import { useAuth } from '../Components/AuthContext';
export default function AdminBoard() {
    const {user} = useAuth();

    return (
        <>
        <h2> hello {user.name} </h2>

    <div className="admin-dashboard" style={{backgroundColor: '#f0f8ff', padding: '20px'}}>
      <div className="header" style={{
        backgroundImage: 'url(path_to_your_header_image.jpg)',
        backgroundSize: 'cover',
        height: '200px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{marginBottom: '20px'}}>לוח בקרה למנהל</h1>
      </div>

      <div className="welcome-text" style={{textAlign: 'center', margin: '20px 0'}}>
        <p>ברוכים הבאים למרכז הניהול. כאן תוכלו לנהל את כל היבטי המערכת.</p>
      </div>

      <div className="admin-options" style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '40px'
      }}>
        <div className="option" style={{textAlign: 'center'}}>
          <i className="fas fa-calendar-alt" style={{fontSize: '48px', color: '#007bff'}}></i>
          <h3>ניהול פגישות</h3>
          <p>תיאום וניהול פגישות עם לקוחות</p>
        </div>
        <div className="option" style={{textAlign: 'center'}}>
          <i className="fas fa-envelope" style={{fontSize: '48px', color: '#007bff'}}></i>
          <h3>הודעות משתמשים</h3>
          <p>קריאה וטיפול בהודעות מלקוחות</p>
        </div>
        <div className="option" style={{textAlign: 'center'}}>
          <i className="fas fa-user-cog" style={{fontSize: '48px', color: '#007bff'}}></i>
          <h3>תוכניות אישיות</h3>
          <p>יצירת תוכניות מותאמות אישית ללקוחות</p>
        </div>
      </div>
    </div>
        </>
    )
};