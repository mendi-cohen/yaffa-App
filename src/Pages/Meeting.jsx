import React, { useState, useEffect } from 'react';


export default function Meeting() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [meetings, setMeetings] = useState({});
  const [currentMonthDays, setCurrentMonthDays] = useState([]);
  const [nextMonthDays, setNextMonthDays] = useState([]);
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);
  const [selectedHour, setSelectedHour] = useState(null);

  const hours = ['10:00', '12:00', '14:00', '16:00', '18:00'];

  useEffect(() => {
    updateDays();
    const timer = setInterval(updateDays, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  const updateDays = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();
    
    const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const currentMonthDays = [];
    for (let i = currentDate; i <= lastDayOfCurrentMonth; i++) {
      currentMonthDays.push(new Date(currentYear, currentMonth, i));
    }
    setCurrentMonthDays(currentMonthDays);
    
    const nextMonth = (currentMonth + 1) % 12;
    const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
    const lastDayOfNextMonth = new Date(nextMonthYear, nextMonth + 1, 0).getDate();
    const nextMonthDays = [];
    for (let i = 1; i <= lastDayOfNextMonth; i++) {
      nextMonthDays.push(new Date(nextMonthYear, nextMonth, i));
    }
    setNextMonthDays(nextMonthDays);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedHour(null);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleAddMeeting = (e) => {
    e.preventDefault();
    const reason = e.target.reason.value;
    if (selectedDate && selectedHour && reason) {
      const dateKey = selectedDate.toDateString();
      const updatedMeetings = { ...meetings };
      if (!updatedMeetings[dateKey]) {
        updatedMeetings[dateKey] = {};
      }
      updatedMeetings[dateKey][selectedHour] = reason;
      setMeetings(updatedMeetings);
      e.target.reason.value = '';
    }
  };

  const renderCalendar = (days) => {
    return days.map(day => (
      <div 
        key={day.toDateString()} 
        className={`calendar-day ${selectedDate && selectedDate.toDateString() === day.toDateString() ? 'selected' : ''}`}
        onClick={() => handleDateClick(day)}
      >
        <span>{day.getDate()}</span>
        {meetings[day.toDateString()] && Object.keys(meetings[day.toDateString()]).length > 0 && 
          <div className="meeting-indicator"></div>}
      </div>
    ));
  };

  const renderHours = () => {
    return hours.map(hour => (
      <div 
        key={hour}
        className={`hour-slot ${selectedHour === hour ? 'selected' : ''}`}
        onClick={() => handleHourClick(hour)}
      >
        {hour}
        {meetings[selectedDate?.toDateString()]?.[hour] && <span className="booked">תפוס</span>}
      </div>
    ));
  };

  const toggleMonth = () => {
    setIsCurrentMonth(!isCurrentMonth);
  };

  const currentMonth = isCurrentMonth ? 
    new Date().toLocaleString('he-IL', { month: 'long' }) :
    new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString('he-IL', { month: 'long' });
  const currentYear = isCurrentMonth ? 
    new Date().getFullYear() :
    (new Date().getMonth() === 11 ? new Date().getFullYear() + 1 : new Date().getFullYear());

  return (
    <div className="meeting-container">
      <h1>קביעת פגישה</h1>
      <h2>{currentMonth} {currentYear}</h2>
      <button onClick={toggleMonth}>
        {isCurrentMonth ? 'עבור לחודש הבא' : 'חזור לחודש הנוכחי'}
      </button>
      <div className="calendar">
        {renderCalendar(isCurrentMonth ? currentMonthDays : nextMonthDays)}
      </div>
      {selectedDate && (
  <div className="hours-container">
    <h3>בחר שעה ל-{selectedDate.toLocaleDateString('he-IL')}</h3>
    <div className="hours-grid">
      {renderHours()}
    </div>
  </div>

      )}
      <form onSubmit={handleAddMeeting} className="meeting-form">
        <input type="text" name="reason" placeholder="סיבת הפגישה" />
        <button type="submit">הוסף פגישה</button>
      </form>
      {selectedDate && selectedHour && meetings[selectedDate.toDateString()]?.[selectedHour] && (
        <div className="meeting-details">
          <h2>פגישה ב-{selectedDate.toLocaleDateString('he-IL')} בשעה {selectedHour}</h2>
          <p>{meetings[selectedDate.toDateString()][selectedHour]}</p>
        </div>
      )}
    </div>
  );
}