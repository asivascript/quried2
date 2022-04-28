import React from 'react'
import { createContext,useState } from 'react';
export const DMcontextval = createContext()
const DMcontext = ({children}) => {
const [isDark, setisDark] = useState(false)

const value = {
    isDark,
    setisDark

}
return (
<DMcontextval.Provider value={value} >
    {
        children
    }
</DMcontextval.Provider>
  )
}

export default DMcontext