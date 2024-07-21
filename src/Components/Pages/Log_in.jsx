import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Log_in() {
  return (
    <div className="card">
      <h2>התחברות</h2>
      <form>
        <label htmlFor="email">אימייל</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">סיסמא</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">היכנס</button>
      </form>

      <motion.div whileHover={{ scale: 1.5 }}>
        <Link to="/signin">
          <i className="fas fa-user"></i> <span> עדיין לא רשומ/ה? </span>
        </Link>
      </motion.div>
    </div>
  );
}
