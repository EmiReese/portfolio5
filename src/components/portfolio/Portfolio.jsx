import React from 'react'
import "./portfolio.css"
import image1 from "../../assets/image1.jpg"
import image3 from "../../assets/image3.jpg"
import image2 from "../../assets/image2.jpg"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image1} alt="CSS coding" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/ALien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image3} alt="CSS coding" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/ALien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image2} alt="CSS coding" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/ALien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio