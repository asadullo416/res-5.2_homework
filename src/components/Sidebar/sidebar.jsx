import React from 'react';
import {Linksidebar} from '../../utils/components';
import "./sidebar.scss"
const Sidebar = () => {
    return (

        <div className="sidebar">
        <div className="sidebar__categories">

          <Linksidebar linkIcon="home" text="Home" link="home"/>
          <Linksidebar linkIcon="local_fire_department" text="Trending" link="trending"/>
          <Linksidebar linkIcon="subscriptions" text="Subscriptions" link="subscription"/>
      
  </div>
       
        <hr />
        <div className="sidebar__categories">
        <Linksidebar linkIcon="library_add_check" text="Library" link="library"/> 
        <Linksidebar linkIcon="history" text="History" link="history"/>
        <Linksidebar linkIcon="play_arrow" text="Your Videos" link="play_arrow"/>
        <Linksidebar linkIcon="watch_later" text="Watch Later" link="watch_later"/>
        <Linksidebar linkIcon="thumb_up" text="Liked Videos" link="thumb_up"/>

           </div>
         <hr />
      </div>
    );

}

export default Sidebar;
