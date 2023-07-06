import React from 'react'

const aboutReactList= ["Information", "More information here", "Bootstrap is super cool", "Information 2", "More information here 2", "Bootstrap is super cool 2"]

function About() {
  return (
    <div>
        <h2>React Bootstrap</h2>
        <ul>
            {aboutReactList.map(((item, ind) => (<li key={ind}>{item}</li>)))}
        </ul>
    </div>
  )
}

export default About