import React from 'react'
import "../Stylesheets/Home.css"
import { useContext,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { Authcontextval } from './Context/Authcontext';
import { QAcontextval } from './Context/QAcontext';
import { ButtonBase } from '@mui/material';
import Answer from './Answer';
import { ArrowUpward,ArrowDownward } from "@mui/icons-material"
import { likeques,dislikeques } from './Connector/Questionroutes';
const Questionbox = ({ question="hi" , likes=0,dislikes=0, questionid,isselected }) => {
const {setanswerOC} = useContext(OCcontextval)
const {isDark} = useContext(DMcontextval)
const { user } = useContext(Authcontextval)
const {currentQuestions,setcurrentQuestions} = useContext(QAcontextval)


const likequesfunc = (e) =>{
 
  e.stopPropagation()
  console.log('liked')
  likeques(user,questionid)
}

const dislikequesfunc = (e) =>{
  e.stopPropagation()
  console.log("disliked")
  dislikeques(user,questionid)
}

const openquestionin = (e)=> {
  console.log(questionid)
  setanswerOC(prev => !prev)
}

return (
    
<div className={ isDark ? 'question Cw100p Cpad Cbgc001 Cc-p Cbrady Cmar-by Cmar-ty' : 'question Cc-p Cw100p Cpad Cbgc005 Cbrady Cmar-by Cmar-ty'} >
<h3>{question}</h3>
<div className="Cflex Cjc-sb" >

<div>
<ButtonBase onClick = {likequesfunc} >
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p>{likes}</p>
</ButtonBase>

<ButtonBase onClick = {dislikequesfunc} >
<ArrowDownward style={{color: 'red' ,marginLeft : '10px'}} />
<p>{dislikes}</p>
</ButtonBase>
</div>
{
isselected ? 
<button className="btnmidsave Cpad " onClick={openquestionin} > Add Answer</button> : null
}
</div>
</div>
  )
}

export default Questionbox