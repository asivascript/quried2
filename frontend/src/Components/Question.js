import Identifier from "./Identifier"
import { useContext,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext"
import { QAcontextval } from "./Context/QAcontext"
import { Authcontextval } from "./Context/Authcontext"
import { addquestion } from "./Connector/Questionroutes"
const Question = () => {

  const {questionOC,setquestionOC} = useContext(OCcontextval)
  const {isDark,setisDark} = useContext(DMcontextval)
  const {currentQuestions,setcurrentQuestions} = useContext(QAcontextval)
  const {user,setuser} = useContext(Authcontextval)
  const [data, setdata] = useState('')
  
  const changehandler = (e) =>{
  setdata(e.target.value)
  }
  const sendData = () => {
    console.log(data)
    addquestion(user, data)
    setquestionOC(prev => !prev)
  }
    if(!questionOC) return null
    
    else return (
    <div className='Cmodal-c' >
    <div className={isDark ? 'answer Cbgc001 Cbrady Cpad' : 'answer Cbgc005 Cbrady Cpad'} >
    <h4 className="Cta-c" >Ask Your Question </h4>
    <Identifier/>

    <textarea autoFocus onChange={changehandler} className={isDark ? "Cw100p Cmar-t Ccw" : "Cw100p Cmar-t "  } name="" id="" cols="30" rows="10"></textarea>
    
    <button className="btnmidcancel " onClick={()=> setquestionOC(prev => !prev)} >Cancel</button>
    
    <button className="btnmidsave Cmar-l" onClick={sendData} >Add Question</button>
    
    </div>
    
    </div>
  )
}

export default Question