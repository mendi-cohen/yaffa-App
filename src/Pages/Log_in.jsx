


export default function Log_in() {
  return (
    <div className="card">
      <h2>התחברות</h2>
      <form>
        <label htmlFor="email">אימייל</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">סיסמא</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit"> התחבר/י </button>
      </form>
    </div>
  );
}
