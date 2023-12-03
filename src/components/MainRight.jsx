import React from 'react'

import { IoBulbOutLine } from "react-icons/io5"
import { MdRssFeed } from "react-icons/md"
import img1 from "../img/img1.png"
import { Link } from 'react-router-dom'

function MainRight() {
  return (
    <div className='mainRight'>
      <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>following </h2>
          <h2>for you</h2>
        </div>

        <div className="lineTwo" />

        <div className="box">
          <h2>Welcome ... this is github clone with react js,saas and react router</h2>
          <p>follow me on <span>youtube</span>,<span>twitter</span></p>
          <button className="btn">
            <Link to="/profile">github clone</Link>
          </button>
        </div>
      <div className="boxCenter">
        <div className="boxCenterFirst">
          {/* <IoBulbOutLine /> */}
          <p>
            i am  a student pusruing my bachelors in chitkara university. i am learning <span>react js</span>

          </p>
        </div>
        <div className="boxCenterFirst">
          <MdRssFeed />
          <p>connect on my linkedin to stay updated</p>
        </div>
      </div>


        {/* {footer} */}

        <div className="footer">
          <div className="footerFirst">
            <img src={img1} alt="" />
            <h4>github clone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>blog</h4>
              <h4>about</h4>
              <h4>shop</h4>
              <h4>github clone</h4>
              <h4>pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>api</h4>
              <h4>training</h4>
              <h4>status</h4>
              <h4>security</h4>
            </div>
            <div className="footerSecondInside">
              <h4>terms</h4>
              <h4>privacy</h4>
              <h4>docs</h4>
            </div>
          </div>
        </div>
        <div className="lineTwo" />
      </div>

    </div>
  )
}

export default MainRight
