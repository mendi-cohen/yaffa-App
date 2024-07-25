import React, { useState } from 'react';

export default function Sign_in() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // בדיקת התאמת סיסמאות
    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'password') {
        setPasswordMatch(value === formData.confirmPassword);
      } else {
        setPasswordMatch(formData.password === value);
      }
    }
  };

  return (
    <div className="card">
      <h2>הרשמה</h2>
      <form>
        <label htmlFor="firstName">שם פרטי</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={formData.firstName}
          onChange={handleInputChange}
          required 
        />
        
        <label htmlFor="lastName">שם משפחה</label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          value={formData.lastName}
          onChange={handleInputChange}
          required 
        />

        <label htmlFor="email">אימייל</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleInputChange}
          required 
        />
        
        <label htmlFor="phone">מספר טלפון</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleInputChange}
          required 
        />
        
        <label htmlFor="password">סיסמא</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password}
          onChange={handleInputChange}
          required 
        />

        <label htmlFor="confirmPassword">אימות סיסמא</label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required 
        />
        {!passwordMatch && formData.confirmPassword !== '' && (
          <p style={{ color: 'red' }}>הסיסמאות אינן תואמות</p>
        )}
        
        <button type="submit">הרשמה</button>
      </form>
    </div>
  );
}