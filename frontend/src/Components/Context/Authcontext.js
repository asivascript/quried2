import React from 'react'
import { createContext,useState } from 'react';
export const Authcontextval = createContext()

const Authcontext = ({children}) => {
const [user, setuser] = useState(false)
    const value = {
        user,
        setuser
    
    }

  return (
<Authcontextval.Provider value={value} >
    {
        children
    }
</Authcontextval.Provider>
  )
}

export default Authcontext