import "../Stylesheets/Home.css"
import Answer from "./Answer";
import Question from "./Question";
import Answerbox from "./Answerbox";
import Searchbox from "./Accessories/Searchbox";
import Questionbox from "./Questionbox";
import { useContext ,useState,useEffect } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { QAcontextval } from "./Context/QAcontext";
import { Authcontextval } from './Context/Authcontext'
import { famousquestion , allquestions,getrecents } from "./Connector/Questionroutes";
import { getanswers } from "./Connector/Answerroutes";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'
import { SearchOutlined,Person,DarkMode,LightMode,StarOutlineOutlined ,QueryBuilder } from "@mui/icons-material"



const Home = () => {
const [querytype, setquerytype] = useState("recent")
const [headques, setheadques] = useState({
    question : "hello there",
    id : "1",
    authour : "kumar",
    likes : 30,
    dislikes : 20
    })
const {answerOC,setanswerOC,questionOC,setquestionOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)
const {user} = useContext(Authcontextval)
const { currentQuestions,setcurrentQuestions,currentAnswers,setcurrentAnswers } = useContext(QAcontextval)
useEffect(() => {
    if(user){
        allquestions(user,setcurrentQuestions)
    }

}, [user,questionOC])
const getrecentsfunc = () =>{
    setquerytype('recent')
    getrecents(user,setcurrentQuestions)
    
}
const getpopular = () =>{
    setquerytype("popular")
    famousquestion(user,setcurrentQuestions)
}
const questionclicked = (e,ques) =>{
    setheadques(ques) 
    getanswers(user,ques.id,setcurrentAnswers)

}
return (
<div className={ isDark ? ' home Cflex Ccw Cjc-c Cbgc002 Ch100vh Cw100p': ' home Cflex Ccb Cjc-c Cbgc003 Ch100vh Cw100p' }>

<section className="navbar Cpad Cflex Cjc-sb " >
<button className="btnmidedit" onClick={() => setquestionOC(prev => !prev)} >Ask Question</button>

<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>

<Link to = "/profile" >

<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <Person/>
</Avatar>

</Link>

</section>














<section className='questans Cbrady Cflex Cai-c Cf-dir Cmar-t'  >

<Questionbox questionid={headques.id} question= {headques.question} likes = {headques.likes} isselected = {true} dislikes = {headques.dislikes} />

<Answer questionid={headques.id} question = {headques.question}  />




{
    currentAnswers.map((ans)=>{
        return(
            <Answerbox answer = {ans.answer} likes={ans.likes} dislikes= {ans.dislikes}/>
        )

    })
}



{/* faqs */}




</section>


<section className="faq Cmar-lx Cmar-t " >
<div className="Cflex Cjc-sb Cai-c" >
{

querytype ==='search' && <Searchbox />

}
{

querytype ==='recent' && <h1 className="Cmar-ly" >Most Recent Questions</h1>

}
{

querytype ==='popular' && <h1 className="Cmar-ly" >Most Popular Questions</h1>

}

<section className="Cflex" >

<div onClick={()=> setquerytype("search")} className='Cmar-ly' >
<Avatar style = {{height : '35px',width  : '35px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <SearchOutlined/>
</Avatar>
</div>


<div onClick={getpopular}className='Cmar-ly' >
<Avatar style = {{height : '35px',width  : '35px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <StarOutlineOutlined/>
</Avatar>
</div>


<div onClick={getrecentsfunc}className='Cmar-ly' >
<Avatar style = {{height : '35px',width  : '35px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <QueryBuilder/>
</Avatar>
</div>


</section>

</div>


{
  currentQuestions &&  currentQuestions.map((ques) => {
        return(
            <div onClick={(e) =>{questionclicked(e,ques)} }>
              <Questionbox questionid={ques.id} question= {ques.question} likes = {ques.likes} dislikes = {ques.dislikes} />
            </div>
        )      
    })
}

















</section>

<Question/>

</div>

   
)
}

export default Home