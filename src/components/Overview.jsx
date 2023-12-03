import React from 'react'
import lists from "../lists.json";

function Overview() {
  return (
    <div className='overview'>
        <div className="overviewDescription">
            <p>universe code/readme.md</p>
            <h1>hi I'm cesara,universe code</h1>
            <div className="line"/>
            <h2>a react developer</h2>
            <p>
                i love coding with html css,java script,react,redux,tailwind css and others
            </p>
            <p>im improving in the backend</p>
            <p>follow me on my twitter,instagram and connect on my linkedin</p>
        </div>

        <div className="repositories">
            <div className="repositoriesTitle">
                <h2>popular repositories</h2>
            </div>
            <div className="repositoriesContainer">
                {lists.map((repo,i)=>(
                    <div className="repositoriesBox" key={i}>
                        <div className="repositoriesTop">
                            <h3>{repo.repo}</h3>
                            <p>{repo.status}</p>
                        </div>
                        <div className="repositoriesBottom">
                             <p>{repo.stack}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Overview
