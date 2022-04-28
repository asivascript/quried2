import React from 'react';
import { createContext,useState } from 'react';
export const OCcontextval = createContext()
const OCcontext = ({children}) => {
const [answerOC, setanswerOC] = useState(false)
const [questionOC, setquestionOC] = useState(false)
const value = {
  answerOC,
  setanswerOC,
  questionOC,
  setquestionOC

}

return (
  <OCcontextval.Provider value={value} >
      {
          children
      }
  </OCcontextval.Provider>
  );
};

export default OCcontext;
