import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/crypto.png'
import IMG2 from '../../assets/zetcommerce.png'
import IMG3 from '../../assets/zetpizza.png'
import IMG4 from '../../assets/html.png'
import IMG5 from '../../assets/old-portfolio.png'
import IMG6 from '../../assets/zashboard.png'

const data = [
  {
    id: 6,
    image: IMG6,
    title: 'Dashboard',
    github: 'https://github.com/raditdanu/zetdashboard',
    demo: 'https://zetdashboard.netlify.app/'
  },
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Price Tracker',
    github: 'https://github.com/raditdanu/ReactAPI-Crypto',
    demo: 'https://zetcrypto.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'React Ecommerce',
    github: 'https://github.com/raditdanu/zetcommerce',
    demo: 'https://zetcommerce.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React Html',
    github: 'https://github.com/raditdanu/pizzaecommerce',
    demo: 'https://zetpizza.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'HTML Ecommerce',
    github: 'https://github.com/raditdanu/htmleccommerce',
    demo: 'https://raditdanu.github.io/htmleccommerce/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'My Old Portfolio',
    github: 'https://github.com/raditdanu/raditdanu.github.io',
    demo: 'https://raditdanu.github.io/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
        <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio