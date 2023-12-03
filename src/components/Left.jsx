import React from 'react'
import img1 from '../img/logo.gif';
import {MdInsertEmoticon} from "react-icons/md";
function Left() {
  return (
    <div className="left">
      <div className="image">
        <img src={img1} alt="" />
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon"/>
        </div>
      </div>
      
      <div className="leftDetails">
        <h2>universe code</h2>
        <button>edit profile</button>
      </div>
    </div>
  )
}

export default Left
