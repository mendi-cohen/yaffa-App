import MyRouter from './Router';
import { AuthProvider } from './Components/AuthContext.jsx';
import './App.css'
import './Css/Layout.css'
import './Css/Sign-Log_in.css' 
import './Css/Home.css' ;
import './Css/About.css';
import './Css/Metting.css';
import './Css/Dasboard.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">

        <MyRouter/>
      </div>
        </AuthProvider>
   
  );
}

export default App;
