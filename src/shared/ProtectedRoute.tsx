import React, {useContext} from 'react'
import {Route, Redirect} from "react-router-dom";
import {LogingContext} from "../GeneralWrapper";

interface IProps {
  path: string,
  children: any,
}

export const ProtectedRoute: React.FC<IProps> = ({path, children}) => {
  const logged = useContext(LogingContext)

  if (!logged.isLoggedIn) return <Redirect to={{pathname: "/"}}/>

  return (
    <Route
      path={path}
      children={children}
    />
  )
}