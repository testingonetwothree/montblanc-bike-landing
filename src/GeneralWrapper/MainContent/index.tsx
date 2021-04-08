import React from 'react'
import {Header} from "./Header";
import {Content} from "./Content";
import './styles.css'
import {SideBar} from "./SideBar";
import {Route, Switch} from "react-router-dom";
import {bigText} from "../../assets/bigtext";
import {ProtectedRoute} from "../../shared/ProtectedRoute";
import {Explore} from "./Explore";

import bike_1 from "../../assets/images/bikes/bike_1.jpg";
import bike_2 from "../../assets/images/bikes/bike_2.jpg";
import bike_3 from "../../assets/images/bikes/bike_3.jpg";
import bike_4 from "../../assets/images/bikes/bike_4.jpg";
import bike_5 from "../../assets/images/bikes/bike_5.jpg";
import bike_6 from "../../assets/images/bikes/bike_6.jpg";
import bike_7 from "../../assets/images/bikes/bike_7.jpg";
import bike_8 from "../../assets/images/bikes/bike_8.jpg";
import bike_9 from "../../assets/images/bikes/bike_9.jpg";
import bike_10 from "../../assets/images/bikes/bike_10.jpg";

import bag_1 from "../../assets/images/accessories/bag_1.png"
import baggage_tag_1 from "../../assets/images/accessories/baggage_tag_1.png"
import bracer_1 from "../../assets/images/accessories/bracer_1.png"
import cufflink_1 from "../../assets/images/accessories/cufflink_1.png"
import keychains_1 from "../../assets/images/accessories/keychains_1.png"
import pencil_2 from "../../assets/images/accessories/pencil_2.png"
import perfume_1 from "../../assets/images/accessories/perfume_1.png"
import perfume_2 from "../../assets/images/accessories/perfume_2.png"
import perfume_3 from "../../assets/images/accessories/perfume_3.png"
import wallet_1 from "../../assets/images/accessories/wallet_1.png"


const bikes = [bike_1, bike_2, bike_3, bike_4, bike_5, bike_6, bike_7, bike_8, bike_9, bike_10]
const accessories = [bag_1, baggage_tag_1, bracer_1, cufflink_1, keychains_1, pencil_2, perfume_1, perfume_2, perfume_3, wallet_1]


const main_content_routes = [
  {path: '/', exact: true, content: <div className="main-content__startpage">Welcome</div>},
  {
    path: "/bikes", exact: false, content:
      <>
        <Content items={bikes}/>
        <SideBar/>
      </>
  },
  {
    path: "/accessories", exact: false, content:
      <>
        <Content items={accessories}/>
        <SideBar/>
      </>
  },
  {path: "/explore", exact: false, content: <Explore/>}
]


export const MainContent = () => (
  <div className="main-content">
    <Header/>
    <div className="main-content__content-wrapper">
      <Switch>
        {main_content_routes.map(i => (
          <Route exact={i.exact} path={i.path} children={i.content}
          />
        ))}
        <ProtectedRoute path="/new-tech" children={
          <div className="main-content__new-tech_text">
            {bigText}
          </div>
        }
        />
      </Switch>
    </div>

  </div>
)