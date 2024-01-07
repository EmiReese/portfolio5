import React, {useState} from 'react'
import './testimonials.css'
import Justin from "../../assets/Justin.jpg";
import Shannon from "../../assets/Shannon.jpg";
import Robert from "../../assets/Robert.jpg";
// import Swiper core and required modules
import { Pagination, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Justin,
    name: 'Justin Williams',
    review: "What impresses me most about Emily is her innate ability to quickly grasp new concepts. She has a remarkable aptitude for ReactJS and a keen eye for investigating and resolving bugs. Her problem-solving skills and attention to detail make her an invaluable asset to any software development team. Throughout our time working together, Emily consistently demonstrated a proactive approach to learning and a genuine passion for staying abreast of industry trends. Her hunger for knowledge and readiness to take on new challenges make her a standout engineer. I am confident that Emily's drive, technical acumen, and eagerness to learn will continue to propel her career forward. I wholeheartedly recommend Emily for any future opportunities where her skills and dedication will undoubtedly make a significant impact.",
  },
  {
    avatar: Shannon,
    name: 'Shannon Barrett',
    review: "I worked closely with Emily while rewriting a web application for our company. Our tasks were demanding and required attention to detail and technical acumen, all of which she demonstrated consistently. Since we were a small team, Emily wore many hats. She assisted with designing the UI, writing the code, and providing QA for the application. Emily was always open to tackling new and challenging problems, which greatly contributed to our ability to meet our goals and complete the project successfully. Emily is an exceptional developer who will be a valuable addition to any team. Her adaptability and propensity to excel in both remote and in-person environments affirm her status as a highly valuable asset. In addition to the technical expertise she brings to the table, Emily has a great sense of humor and is a lot of fun to be around. I hope to have another opportunity to work with her in the future."
  },
  {
    avatar: Robert,
    name: 'Robert Ludwick',
    review: "I have had the pleasure of working closely with Emily Reese, a highly dedicated and skilled Junior React Developer. Emily consistently demonstrates a strong understanding of React, showcasing her ability to create efficient and responsive user interfaces. Her attention to detail and commitment to writing clean, maintainable code sets her apart. Throughout our collaboration, Emily has proven to be a quick learner, adapting swiftly to new technologies and methodologies. She actively contributes to team discussions, demonstrating effective communication and collaboration skills. Her positive attitude and enthusiasm make her a valuable asset to any development team. Emily’s passion for front-end development, coupled with her proactive approach to problem-solving, make her an ideal candidate for projects requiring a keen eye for design and functionality. I wholeheartedly recommend Emily Reese as a Junior React Developer and am confident in her ability to make meaningful contributions to any development team."
  }

]
const Testimonials = () => {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[ Pagination, Controller]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
         controller={{control: controlledSwiper}}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className='client__avatar'>
                  <img src={avatar} alt="Justin" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials