import React from 'react'

const aboutReactList= ["Information", "More information here", "Bootstrap is super cool"]

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