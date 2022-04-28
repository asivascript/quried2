import React from 'react'
import { createContext,useState } from 'react';
export const QAcontextval = createContext()


const QAcontext = ({children}) => {
const [currentQuestions, setcurrentQuestions] = useState([{
question : "hello there",
id : "1",
authour : "kumar",
likes : 30,
dislikes : 20
}])
const [currentAnswers, setcurrentAnswers] = useState([])

const value = {
    currentQuestions,
    setcurrentQuestions,
    currentAnswers,
    setcurrentAnswers,

}
return (
<QAcontextval.Provider value={value} >
    {
        children
    }
</QAcontextval.Provider>
  )
}

export default QAcontext
