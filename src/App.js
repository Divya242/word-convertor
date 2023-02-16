import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import AboutApp from './components/AboutApp';
import { setTimeout } from 'timers';
import Checkbox from './component/React Practise/CheckboxPractise/Checkbox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import About from '../src/component/NavBar/About';
// import Skill from '../src/component/NavBar/Skill';

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [buttonColor, setButtonColor] = useState('primary');


  const showAlertMessage = (message, type) => {
    setAlert({
     msg: message,
     type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlertMessage("Dark mode has been enable","success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlertMessage("Light mode has been enable","success");
      document.title = "TextUtils - Light Mode"
    }
  }

  const togglebuttonColorMode = () => {
    if(buttonColor === "primary") {
      setButtonColor("success");
      document.body.style.backgroundColor = "#6c757d"
    }
    else {
      setButtonColor("primary");
      setMode('dark');
      document.body.style.backgroundColor = "#8dbe00";
    }
  }

  return (
    <Router>
    <div>
      <div className="App">
        <Navbar title="Word Converter" mode={mode} buttonColor={buttonColor} toggleMode = {toggleMode} togglebuttonColorMode={togglebuttonColorMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">

        <Switch>
          <Route exact path="/about">
            <AboutApp />
          </Route>

          <Route exact path="/">
          <TextForm heading="Try TextUtils ~ Word Counter, Character Counter , Remove Extra spaces" mode={mode} showAlertMessage={showAlertMessage} buttonColor={buttonColor}/>
        <Checkbox mode={mode}/>
          </Route>
        </Switch>



        </div>
       {/* Portfolio Info
       <About/>
       <Skill/> */}
     </div>
    </div>
    </Router>
  )
}

