import React from 'react'
import {Link} from "react-router-dom";
function Menu() {
    return (
        <div className='menu'>
            <div className="menuContainer">
                <p>Signed in as <br />
                    Universe code</p>

                <div className="lineThree" />
                <div className="menuStatus">
                    <input type="text" placeholder='Set Status' />
                </div>
                <div className="lineThree" />
                <p>
                    <Link to='/profile'>your profile</Link>
                </p>
                <p>Your repositories</p>
                <p>Your codespaces</p>
                <p>Your organizations</p>
                <p>Your projects</p>
                <p>Your stars</p>
                <p>Your gists</p>

                <div className="lineThree" />

                <p>Upgrade</p>
                <p>Feauture preview</p>
                <p>Help</p>
                <p>Settings</p>

                <div className="lineThree" />

                <p>Sign Out</p>
            </div>
        </div>
    )
}

export default Menu
