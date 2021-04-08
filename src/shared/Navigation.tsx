import React from 'react'
import {Link} from 'react-router-dom'


interface IProps {
  className: string
  name: string
  link: string
}


export const Navigation: React.SFC<IProps> = ({className, name, link}) => {
  return (
    <Link to={link} className={className}>{name}</Link>
  )
}