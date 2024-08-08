import MyRouter from './Router';
import './App.css'
import './Css/Layout.css'
import './Css/Sign-Log_in.css' 
import './Css/Home.css' ;
import './Css/About.css';
import './Css/Metting.css';
import { AuthProvider } from './Components/AuthContext.jsx';

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
