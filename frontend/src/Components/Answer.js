import "../Stylesheets/Answer.css"
import Identifier from "./Identifier"
import { useContext,useState,useEffect } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext"
import { Authcontextval } from "./Context/Authcontext"
import { addanswer } from './Connector/Answerroutes';

const Answer = ({questionid,question}) => {
const {answerOC,setanswerOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)
const {user,setuser} = useContext(Authcontextval)
const [data, setdata] = useState('')




const changehandler = (e) =>{
    setdata(e.target.value)
}


const sendData = (e) => {
    e.stopPropagation()
    console.log(questionid)
    addanswer(user,questionid,data)
    setanswerOC(prev => !prev)
}



if(!answerOC) return null

else return (
<div className='Cmodal-c' >
<div className={isDark ? 'answer Cbgc001 Cbrady Cpad' : 'answer Cbgc005 Cbrady Cpad'} >
<h4 className="Cta-c" >Put Your Answer</h4>
<Identifier/>
<h3>{question}</h3>

<textarea autoFocus onChange={changehandler} className={isDark ? "Cw100p Cmar-t Ccw" : "Cw100p Cmar-t "  } name="" id="" cols="30" rows="10">

</textarea>

<button className="btnmidcancel Cmar-l " onClick={()=> setanswerOC(prev => !prev)} >Cancel</button>

<button className="btnmidsave Cmar-l" onClick={sendData} >Send</button>

</div>

</div>
)
}

export default Answer