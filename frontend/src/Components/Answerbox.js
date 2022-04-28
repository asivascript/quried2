import "../Stylesheets/Home.css"
import Identifier from './Identifier'
import { useContext } from 'react'
import {Avatar,ButtonBase} from '@mui/material';
import {ArrowUpward,ArrowDownward} from "@mui/icons-material"
import {DMcontextval} from "./Context/DMcontext";

const Answerbox = ({answer,likes,dislikes}) => {
const {isDark,setisDark} = useContext(DMcontextval)

return (
<div className={isDark ? 'answerbox Cw100p Cpad Cbgc001 Cbrady Cmar-by' : 'answerbox Cw100p Cpad Cbgc005 Cbrady Cmar-by'} >
<Identifier/>
<p>{answer}</p>
{/* 
<div className="Cflex Cmar-t" >
     
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p className="Cmar-r">{likes}</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red'}} />
<p>{dislikes}</p>
</ButtonBase>

</div> */}
</div>
  )
}

export default Answerbox