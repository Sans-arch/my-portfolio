import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

import { PortfolioProject } from './components/PortfolioProject';
import { Service } from './components/Service';

import '../styles/globals.css'

import deved from '../assets/dev-ed-wave.png';
import design from '../assets/design.png';
import code from '../assets/code.png';
import consulting from '../assets/consulting.png';
import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';
import web4 from '../assets/web4.png';
import web5 from '../assets/web5.png';
import web6 from '../assets/web6.png';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-200'>Meu Portfólio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Santiago Negreira</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Desenvolvedor de software.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-gray-300'>
              Freelancer providing services for programming and design content needs.
              Join me down below and let's get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 mb-10'>
            <img src={deved} alt="Foto" style={{ objectFit: "cover", height: "100%" }} />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-teal-500'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className='text-teal-500'> agencies </span> consulted for <span className='text-teal-500'>startups </span> started and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray dark:text-white'>
              I offer from a wide range of services, including brand design, programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <Service
              imgLink={design}
              title="Beatiful Designs"
              description='Creating elegant designs suited for your needs following core design theory.'
            />
            <Service
              imgLink={consulting}
              title="Beatiful Designs"
              description='Creating elegant designs suited for your needs following core design theory.'
            />
            <Service
              imgLink={code}
              title="Beatiful Designs"
              description='Creating elegant designs suited for your needs following core design theory.'
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-teal-500'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className='text-teal-500'> agencies </span> consulted for <span className='text-teal-500'>startups </span> started and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray dark:text-gray-200'>
              I offer from a wide range of services, including brand design, programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <PortfolioProject imgLink={web1} />
            <PortfolioProject imgLink={web2} />
            <PortfolioProject imgLink={web3} />
            <PortfolioProject imgLink={web4} />
            <PortfolioProject imgLink={web5} />
            <PortfolioProject imgLink={web6} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
