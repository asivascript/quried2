import './App.css';
import "./Stylesheets/Cstyle/Colors.css"
import "./Stylesheets/Cstyle/Flexbox.css"
import "./Stylesheets/Cstyle/Hw.css"
import "./Stylesheets/Cstyle/Marpad.css"
import "./Stylesheets/Cstyle/Bradius.css"
import "./Stylesheets/Cstyle/Button.css"
import "./Stylesheets/Cstyle/Modal.css"
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import PrivateRoute from "./Components/Routercomponent/PrivateRoute"
import OCcontext from './Components/Context/OCcontext';
import DMcontext from './Components/Context/DMcontext';
import QAcontext from './Components/Context/QAcontext';
import Authcontext from './Components/Context/Authcontext';
import Home from './Components/Home'
import Login from './Components/Login';
import Search from './Components/Search';
import Profile from './Components/Profile'

function App() {
return (
<div>
<Authcontext>
<QAcontext>
<DMcontext>

<OCcontext>
<Router>

<Routes>
<Route exact path="/" element = {<Login/>} />
  

<Route exact path="/home" element = {
<PrivateRoute>
<Home/>
</PrivateRoute>
}/>


<Route exact path="/search" element = {
<PrivateRoute>
<Search/>
</PrivateRoute>
}/>


    
<Route exact path="/profile" element = {
<PrivateRoute>
<Profile/>
</PrivateRoute>
}/>


</Routes>

</Router>


</OCcontext>
</DMcontext>
</QAcontext>
</Authcontext>
</div>
);
}

export default App;
