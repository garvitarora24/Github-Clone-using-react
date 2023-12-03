import React from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import lists from "../lists.json";
import img2 from "../img/logo.gif";
import {Link} from "react-router-dom"
function MainLeft() {
  return (
    <div className="mainLeftContainer">
        <div className="mainLeft">
            <div className="mainLeftName">
                <img src={img2} alt="" />

                <h2>universe code</h2>
                <IoMdArrowDropdown/>
            </div>
            {/* {line} */}
            <div className="line"/>
            {/* {recent repo} */}
            <div className="recentRepo">
                <div className="recentRepos">
                    <h2>recent repositories</h2>
                    <button>new</button>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder='find a repositorioes...' />
                </div>
            </div>
            <div className="mainLeftLists">
                {lists.map((item,idx)=>(
                    <div className="item" key={idx}>

                        <img src={img2} alt="" />
                    <div>
                        <h2>{`${item.name}/${item.repo}`}</h2>
                    </div>
                    </div>

                ))}
                <Link to='/profile'>show more</Link>
            </div>


            <div className="line"/>
            <div className="recentRepo">
                <div className="recentRepos">
                    <h2>recent activities</h2>
                </div>
                <p>thanks for watchimg</p>
            </div>

            <div className="line"/>

            <div className="recentRepo">
                <div className="recentRepos">
                    <h2>your teams</h2>
                </div>
                <div className="inputBoxTwo">
                    <input type="text"  placeholder='find a team...'/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default MainLeft
