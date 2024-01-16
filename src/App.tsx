import './App.scss'
import { Button } from './components'
import background from './assets/BackGround1.png'
import image1 from './assets/Image 3.png'
import image2 from './assets/Image 4.png'
import { motion } from "framer-motion"

function App() {

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <nav className="nav">
        <div className='block'>
          <div className="nav-logo">
            PORTFOLIO
          </div>
          <ul className="nav-links">
            <li>About</li>
            <li>Experience</li>
            <li>Works</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className="header-text">
          <h1>FRONTEND <br /> DEVEloper</h1>
          <h2>VASILIY SHEVCHUCK</h2>
          <div className="header-text-buttons">
            <Button title='title' link='link' />
            <Button title='title' link='link' />
          </div>
        </div>
      </header>

      <div className="container">
        <motion.section className="title-section" initial="hidden" animate="visible" variants={fadeInVariants}>
          <h1>Experience</h1>
        </motion.section>
        <section className="text-section">
          <h3>CHI SOFTWARE</h3>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
        </section>
        <section className="text-section">
          <h3>CHI SOFTWARE</h3>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
        </section>

        <div className="hr"></div>
        <section className="title-section">
          <h1>Skills</h1>
        </section>
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
        <div className="hr"></div>
        <section className="title-section">
          <h1>Projects</h1>
        </section>
        <section className="text-section column">
          <div className="image">
            <img src={image1} alt="Project image" />
          </div>
          <h3>Netflix Clone</h3>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.<br /> what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
          <Button title='title' link='link' />
        </section>
        <section className="text-section column">
          <div className="image">
            <img src={image2} alt="Project image" />
          </div>
          <h3>Twitch Clone</h3>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.<br /> what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
          <Button title='title' link='link' />
        </section>
        <section className="title-section" style={{ padding: '140px 0 100px 0' }}>
          <h1>Testimonials</h1>
        </section>
        <section className="text-section column" >
          <h3 style={{ margin: 0 }}>Veronika Bovt<br />
            Project manager at CHI SOFTWARE<br />“”</h3>
          <p>Having worked with Vasiliy for several months, I must say he did a great job on the project. Vasiliy is experienced front-end developer with a positive attitude. He always goes the extra mile to ensure the company standards and client requirements are met. He is welcoming to feedback and making improvements. Plus, Vasiliy is self-motivated and a great team player. Thanks for your work, Vasiliy!</p>
        </section>
        <section className="title-section">
          <h1>Courses</h1>
        </section>
        <section className="text-section">
          <h3>Middle Front-end Developer<br />2023 -  Current</h3>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
        </section>
        <section className="text-section">
          <h3>Junior Front-end Developer<br />
            2022</h3>
          <p>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future. what's shown below, plus everything that will be added in the future.what's shown below, plus everything that will be added in the future.</p>
        </section>
        <section className="title-section">
          <h1>Languages</h1>
        </section>
        <section className="text-section languages">
          <h3>English<br />
            B2 - B2+</h3>
          <h3>Ukrainian<br />
            Fluent</h3>
        </section>
        <section className="text-section languages">
          <h3>German<br />
            A1 - A2</h3>
          <h3>Russian<br />
            Fluent</h3>
        </section>
        <div className="hr"></div>
        <footer className='footer'>
          <h5>Vasiliy Shevchuk</h5>
          <div>
            <a href="">Linkedin</a>
            <a href="">Github</a>
            <a href="">CV</a>
          </div>
        </footer>
      </div >
    </>
  )
}

export default App
