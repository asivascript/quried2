import React from 'react'
import "./Styles/Container.css"
const Container = ({children,widthval,heightval,extraclass}) => {
  return (
    <div className= {`container Cbgc001 Cpad Cbrady Cmar-ty Ccw ${extraclass}`}  style={{ width : widthval, height : heightval }} >
      {
        children
      }
    </div>
  )
}

export default Container