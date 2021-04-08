import React from 'react'


interface IProps {
  inf: any
}


export const InfoBlock: React.SFC<IProps> = ({inf}) => {
  return (
      <div className="sidebar__item">
        <div className="sidebar__item_vertical">{inf.vertical}</div>
        <div className="sidebar__item-main">
          <div className="sidebar__item_header">{inf.header}</div>
          <div className="sidebar__item_main-text">{inf.main}</div>
          <div className="sidebar__item_footer">{inf.footer}</div>
        </div>
      </div>
  )
}