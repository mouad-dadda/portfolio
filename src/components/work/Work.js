import React from 'react'
import Works from './Works'
import './works.css'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">
        {/* Most Recent Work */}
      </span>
      <Works/>
    </section>
    )
}

export default Work