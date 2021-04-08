import React from 'react'
import {InfoBlock} from "../../../shared/InfoBlock";
import './styles.css'


const info = [
  {
    key: "y1wIaNaQss",
    vertical: "top speed",
    header: "6-speed constant-mesh",
    main: "272 km/h",
    footer: "169 mph",
  },
  {
    key: "zjn0YcePnk",
    vertical: "power",
    header: "121 kw",
    main: "162 hp",
    footer: "9m250 rpm",
  },
  {
    key: "vw1zGu1jF6",
    vertical: "torque",
    header: "8,800 rpm",
    main: "130.5 n·m",
    footer: "96.3 lbf·ft",
  },
  {
    key: "VgFLSkp3sb",
    vertical: "fuel capacity",
    header: "4,5 us gal",
    main: "17 l",
    footer: "3.7 imp gal",
  },
]

export const SideBar = () => {
  return (
    <aside className="sidebar">
      {info.map(inf => (
        <InfoBlock key={inf.key} inf={inf}/>
      ))}
    </aside>

  )
}