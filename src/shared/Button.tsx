import React from 'react'

interface IProps {
  className?: string
  onClick?: any
  children: any
}

export const Button: React.SFC<IProps> = ({className,onClick, children}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}