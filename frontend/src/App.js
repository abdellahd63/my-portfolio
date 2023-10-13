import logo from './logo.svg';
import './App.css';
import NavBar from './Componants/NavBar';
import Home from './Componants/Home';
import Aboutme from './Componants/Aboutme';
import MyServices from './Componants/MyServices';
import Contact from './Componants/Contact';

function App() {
  return (
    <div className="App">
      
       <NavBar/>

       <body>
          <Home />
          <Aboutme/>
          <MyServices/>
          <Contact/>
       </body>

    </div>
  );
}

export default App;
