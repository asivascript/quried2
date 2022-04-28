import "../Stylesheets/Login.css"
import { useState } from "react"
import { useContext } from "react"
import {DMcontextval} from "./Context/DMcontext";
import { Authcontextval } from './Context/Authcontext';
import {Avatar,ButtonBase} from '@mui/material';
import {DarkMode,LightMode} from "@mui/icons-material"
import {login,register} from "./Connector/Authroutes"
import { useNavigate } from "react-router-dom";
const Login = () => {
const navigate = useNavigate()
const {isDark,setisDark} = useContext(DMcontextval)
const {user,setuser} = useContext(Authcontextval)
const [islogin, setislogin] = useState(true)
const [isloading, setisloading] = useState(false)
const [data, setdata] = useState({})

const changehandler = (e) =>{
    setdata({...data, [e.target.name] : e.target.value})
}

const loginfunc = (e) => {
    login(data,setuser)
    navigate("/home")
}
const registerfunc = (e) =>{
    register(data,setuser)
}

return (
<div className={isDark ? 'login Ch100vh Cflex Cai-c Cjc-c Ccw Cbgc002 ' : 'login Ch100vh Cflex Cai-c Ccb Cjc-c Cbgc003 '} >

{/* navbar */}

<section className="navbarlogin Cpad Cflex Cjc-sb " >


<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>


</section>


<section className={isDark ? "loginbox Cflex Cf-dir Cjc-sb Cpad Cbrad Cbgc001 Cai-c" : "loginbox Cflex Cf-dir Cjc-sb Cpad Cbrad Cbgc005 Cai-c "} >
<Avatar style = {{width : '50px',height : '50px'}} />


<h2>{islogin? "Login" : "Signup"}</h2>

<div className="Cmar-ty" >

<input type="text" name="email" placeholder="Enter Email" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw " : "Cbrady Cbgc003 Ccb"}/>
{
!islogin ? 
<input type="text" name="username" placeholder="Enter UserName" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />
: null
}

<input type="password" name="password" placeholder="Enter Password" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />

{
!islogin ? 
<input type="password" name="Cpassword" placeholder="Confirm Password" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />
: null
}

</div>
{islogin ?  <button className="btnmidsave" onClick = {loginfunc} > Login </button> : <button onClick={registerfunc}  className="btnmidsave Cmar-tx Cmar-bx"  > Sign Up</button> }

<p>Don't Have a Account <span className={isDark ? "link Cc-p" : "link2 Cc-p"} href="#" onClick={() => setislogin(prev => !prev)} >{!islogin ? "login" : "sign Up"}</span></p>

</section>


</div>
)

}

export default Login