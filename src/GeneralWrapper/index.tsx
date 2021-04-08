import React from 'react'
import {MainContent} from "./MainContent";
import './styles.css'

export const LogingContext = React.createContext({ isLoggedIn: false })

export const GeneralWrapper = () => {
  return (
    <LogingContext.Provider value={{ isLoggedIn: false }}>
      <div className="general-wrapper" >
        <MainContent/>
      </div>
    </LogingContext.Provider>
  )
}