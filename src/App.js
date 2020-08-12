import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,useHistory,Route,Switch} from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Student from './components/Student'
import Teacher from './components/Teacher'
import 'bootstrap/dist/css/bootstrap.min.css'

const Routing=()=>{
  const history = useHistory();
  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
     console.log("object")
    }else{
        history.push('/')
    }
  }, [])

  return(
    <Switch>
    <Route path="/" exact>
        <Signup />
    </Route>
    <Route path="/login">
        <Login />
    </Route>
    <Route path="/student">
        <Student />
    </Route>
    <Route path="/teacher">
        <Teacher />
    </Route>
 </Switch>
  )
}



function App() {
  

  return (
   <BrowserRouter>
    <Routing />
   
   </BrowserRouter>
  );
}

export default App;
