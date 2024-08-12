import { useAuth } from '../Components/AuthContext';


export default function Dashboard() {
  const { user } = useAuth(); 

  const upcomingTasks = [
    { id: 1, task: 'הכנת דוח', dueDate: '2024-08-15' },
    { id: 2, task: 'סקירת התקדמות', dueDate: '2024-08-20' },
  ];

  const pastMeetings = [
    { id: 1, date: '2024-07-30', notes: 'שיחה על שיטות חינוך חדשות' },
    { id: 2, date: '2024-07-15', notes: 'דיון על התקדמות התלמיד' },
  ];

  const schedule = [
    { id: 1, date: '2024-08-10', time: '10:00 AM' },
    { id: 2, date: '2024-08-17', time: '2:00 PM' },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{`שלום ${user.name}`}</h1>
        <p>ברוך הבא לדשבורד שלך!</p>
      </header>
      
      <section className="dashboard-section">
        <h2>מטלות לפגישה הבאה</h2>
        <ul className="task-list">
          {upcomingTasks.map(task => (
            <li key={task.id}>
              <span>{task.task}</span> - <span>{task.dueDate}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="dashboard-section">
        <h2>פגישות קודמות</h2>
        <ul className="meeting-list">
          {pastMeetings.map(meeting => (
            <li key={meeting.id}>
              <span>{meeting.date}</span> - <span>{meeting.notes}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="dashboard-section">
        <h2>לוח פגישות</h2>
        <ul className="schedule-list">
          {schedule.map(event => (
            <li key={event.id}>
              <span>{event.date}</span> - <span>{event.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}



