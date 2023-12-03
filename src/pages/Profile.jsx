import React from 'react'
import {AiOutlineInbox} from "react-icons/ai";
import {TbBook,TbBook2} from "react-icons/tb";
import {FiBox,FiStar} from "react-icons/fi";
import Left from "../components/Left";
import Overview from '../components/Overview';

function Profile() {
  return (
    <div className='profile'>
      <nav>
        <div className="profileIcon">
            <TbBook/>
            <h2>overview</h2>
        </div>
        <div className="profileIcon">
            <TbBook2/>
            <h2>repositories</h2>
        </div>
        <div className="profileIcon">
            <AiOutlineInbox/>
            <h2>projects</h2>
        </div>
        <div className="profileIcon">
            <FiBox/>
            <h2>packages</h2>
        </div>
        <div className="profileIcon">
            <FiStar/>
            <h2>stars</h2>
        </div>
        </nav>
        <div className="lineFour"/>
        <div className="sectionCenter">
            <Left/>
            <Overview/>
        </div>

  
     
    </div>
    
  );
}

export default Profile

