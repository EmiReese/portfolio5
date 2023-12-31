import React from 'react'
import './experience.css'
import { TbDiscountCheckFilled } from "react-icons/tb";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>.Net</h4>
                <small className='text-light'>Begineer</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbDiscountCheckFilled className='experience__details-icons'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Begineer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience