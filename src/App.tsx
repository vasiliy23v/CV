import './App.scss'
import { Button, Reveal } from './components'
import image1 from './assets/Image 3.png'
import image2 from './assets/Image 4.png'
import preview from './assets/preview.jpg'
import scroll from './assets/gif.gif'
// import cv from './assets/CV_eng.pdf'
import promo from './assets/Comp 1_3.mp4'
import { useState } from 'react'

function App() {
  const [isPaused, setIsPaused] = useState(false)
  const [showNavigation, setShowNavigation] = useState(true)

  const togglePlayPause = () => {
    const video = document.getElementById("myVideo") as HTMLVideoElement
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
    setIsPaused(!isPaused)
    setShowNavigation(false)
    console.log("togglePlayPause", showNavigation, isPaused)
  }

  const handleVideoEnd = () => {
    setIsPaused(true)
    setShowNavigation(true)
    console.log("handleVideoEnd", showNavigation, isPaused)
  }
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null
    const burgerMenu = document.querySelector('.burger-menu') as HTMLElement | null

    if (navLinks && burgerMenu) {
      navLinks.classList.toggle('active')
      burgerMenu.classList.toggle('active') // Add or remove 'active' class on the burger menu
      console.log('Toggle menu executed')
    }
  }




  return (
    <>
      <nav className="nav" style={{ display: showNavigation ? 'block' : 'none' }}>
        <Reveal>
          <div className='block'>
            <div className="nav-logo">
              PORTFOLIO
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="nav-links active">
              <a href='#h1_0' onClick={toggleMenu}><li>About</li></a>
              <a href='#h1_1' onClick={toggleMenu}><li>Experience</li></a>
              <a href='#h1_2' onClick={toggleMenu}><li>Skills</li></a>
              <a href='#h1_3' onClick={toggleMenu}><li>Projects</li></a>
              <a href='#h1_4' onClick={toggleMenu}><li>Testimonials</li></a>
            </ul>
          </div>

        </Reveal>
      </nav >
      <header className="header" id="h1_0">
        <video autoPlay id="myVideo" poster={preview} onEnded={handleVideoEnd} >
          <source src={promo} type="video/mp4" />
        </video>
        <div onClick={togglePlayPause} className={isPaused ? 'wrapper transperent' : 'wrapper visible'} >
          <div className="video-main">
            <div className="promo-video">
              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
            </div>
            {!isPaused && <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              width="40px" height="40px" viewBox="0 0 96.155 96.155"
            >
              <g>
                <path d="M20.972,95.594l57.605-45.951c0.951-0.76,0.951-2.367,0-3.127L20.968,0.56c-0.689-0.547-1.716-0.709-2.61-0.414
		c-0.186,0.061-0.33,0.129-0.436,0.186c-0.65,0.35-1.056,1.025-1.056,1.764v91.967c0,0.736,0.405,1.414,1.056,1.762
		c0.109,0.06,0.253,0.127,0.426,0.185C19.251,96.305,20.281,96.144,20.972,95.594z"/>
              </g>
            </svg>}
          </div>
        </div>
        {/* <div id="myBtn" onClick={togglePlayPause} className={isPaused ? 'transperent' : 'visible'} /> */}
        <div style={{ display: showNavigation ? 'flex' : 'none', position: 'absolute', bottom: '50px', height: "100px", width: '100%', justifyContent: 'center' }}>
          <div>
            <img src={scroll} alt="Scroll down" style={{ height: "50px" }} />
          </div>
        </div>
        {/* <div className="header-text container">
          <Reveal>
            <h1>FRONTEND <br /> DEVEloper</h1>
          </Reveal>
          <Reveal>
            <h2>VASILIY SHEVCHUCK</h2>
          </Reveal>
          <Reveal>
            <div className="header-text-buttons">
              <Button title='title' link='link' />
              <Button title='title' link='link' />
            </div>
          </Reveal>
        </div> */}
      </header>

      <div className="container">
        <Reveal>
          <section className="title-section" id="h1_1">
            <h1>Experience</h1>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section">
            <h3>CHI SOFTWARE</h3>
            <p>
              <strong>August 2022 - September 2023</strong><br /><br />In the role of lead developer for the Medical Clinic and IT Company web applications, my responsibilities encompassed requirements analysis, architecture design, and user interface implementation using technologies like React.js and Material UI. I ensured efficient state management, conducted rigorous testing, and implemented server-side functionalities for optimal performance. Additionally, for the IT Company project, I focused on form validation, responsive design, and integrated features to enhance client acquisition and overall user experience.
            </p>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section">
            <h3>DEUYCH MEDICAL</h3>
            <p><strong>September 2023 - Current</strong><br /><br />As an experienced web developer, I specialise in creating intuitive user interfaces and functionality for web applications. My responsibilities include developing CRM systems for medical clinics and web platforms for IT companies using advanced technologies such as React.js, TypeScript, Redux Toolkit and Docker. I constantly strive to optimise processes, including data management, and improve user experience to create efficient and user-friendly web systems.</p>
          </section>
        </Reveal>
        <Reveal>
          <div className="hr"></div>
        </Reveal>
        <Reveal>
          <section className="title-section" id="h1_2">
            <h1>Skills</h1>
          </section>
        </Reveal>
        <Reveal>

          <section className="text-section">
            <h3>React.js<br />
              TypeScript<br />
              JavaScript<br />
              Git<br />
              Next.js<br />
              Node.js<br />
              Testing<br />
              CI/CD</h3>
            <p>
              Tools / Libs:<br /><br />
              React, React Redux, Redux Toolkit, React Router, React Hook Forms, Redux-Thunk, Redux-Saga, Yup, Material UI, Styled Component, HTML5, CSS3, SASS/SCSS, Bootstrap, Webpack, Vite, Zustand, ES-Lint, Prettier, Axios, Tailwind, Jest, React Testing library, i18n, Configurations, VS Code, etc.<br /><br />

              Other:<br /><br />
              Adobe Photoshop CC 2019, Figma, Zeplin, Avocode<br /><br />
              SOFT SKILLS:<br /><br />
              Teamwork, Client Needs Understanding, Communication, Flexibility and Adaptability, Trainability, Self-Organization, Self-discipline, etc.<br /><br />


            </p>
          </section>
        </Reveal>
        <Reveal>

          <div className="hr"></div>
        </Reveal>
        <Reveal>

          <section className="title-section" id="h1_3">
            <h1>Projects</h1>
          </section>
        </Reveal>
        <Reveal>

          <section className="text-section column">
            <div className="image">
              <img src={image1} alt="Project image" />
            </div>
            <h3>Netflix Clone</h3>
            <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
            <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.<br /> what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
            <Button title='title' link='link' />
          </section>
        </Reveal>
        <Reveal>

          <section className="text-section column">
            <div className="image">
              <img src={image2} alt="Project image" />
            </div>
            <h3>Twitch Clone</h3>
            <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
            <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.<br /> what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
            <Button title='title' link='link' />
          </section>
        </Reveal>
        <Reveal>

          <section className="title-section" id="h1_4">
            <h1>Testimonials</h1>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section column" >
            <h3 style={{ margin: 0 }}>Veronika Bovt<br />
              Project manager at CHI SOFTWARE<br />“”</h3>
            <p>Having worked with Vasiliy for several months, I must say he did a great job on the project. Vasiliy is experienced front-end developer with a positive attitude. He always goes the extra mile to ensure the company standards and client requirements are met. He is welcoming to feedback and making improvements. Plus, Vasiliy is self-motivated and a great team player. Thanks for your work, Vasiliy!</p>
          </section>
        </Reveal>
        <Reveal>
          <section className="title-section">
            <h1>Courses</h1>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section">
            <h3>Middle Front-end Developer<br />2023 -  Current</h3>
            <p>As a Middle Front-end Developer, I additionally took continuing education courses to deepen my skills and stay up-to-date with current trends in web development.</p>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section">
            <h3>Junior Front-end Developer<br />
              2022</h3>
            <p>After successfully completing a web development course in 2022, where I actively learnt React and implemented my own projects, I continue to work, deepening my skills, putting them into practice and actively participating in web development processes.</p>
          </section>
        </Reveal>
        <Reveal>
          <section className="title-section">
            <h1>Languages</h1>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section languages">
            <h3>English<br />
              B2 - B2+</h3>
            <h3>Ukrainian<br />
              Fluent</h3>
          </section>
        </Reveal>
        <Reveal>
          <section className="text-section languages">
            <h3>German<br />
              A1 - A2</h3>
            <h3>Russian<br />
              Fluent</h3>
          </section>
        </Reveal>
        <Reveal>
          <div className="hr"></div>
        </Reveal>
        <Reveal>
          <footer className='footer'>
            <h5>Vasiliy Shevchuk</h5>
            <div>
              <a href="https://www.linkedin.com/in/vasiliy-shevchuk-24b0b0177/" target='_blank'>Linkedin</a>
              <a href="https://github.com/vasiliy23v" target='_blank'>Github</a>
              <a href="/" target='_blank'>Download CV</a>
            </div>
          </footer>
        </Reveal>
      </div>
    </>
  )
}

export default App
