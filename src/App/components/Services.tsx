import { DiJava, DiNodejs, DiReact } from 'react-icons/di'
import { SiApachetomcat, SiJavascript, SiTypescript, SiStyledcomponents, SiMysql, SiMicrosoftsqlserver } from 'react-icons/si'

import { Service } from "./Service";
import { ServicesText } from "./ServicesText";

import design from '../../assets/design.png';
import code from '../../assets/code.png';

export function Services() {
  return (
    <section>
      <ServicesText />
      <div className='lg:flex gap-10'>
        <Service
          imgLink={design}
          title="Back-end"
          description='Experiência no desenvolvimento de aplicações back-end, desenvolvendo API REST com Java e Node.js e utilizando banco de dados relacional, sempre seguindo as boas práticas de desenvolvimento.'
        >
          <DiJava className='text-6xl' />
          <DiNodejs className='text-6xl' />
          <SiApachetomcat className='text-6xl' />
          <SiMysql className='text-6xl' />
          <SiMicrosoftsqlserver className='text-6xl' />
        </Service>
        <Service
          imgLink={code}
          title="Front-end"
          description='Experiência no desenvolvimento de aplicações front-end, desenvolvendo SPA com React.js e utilizando bibliotecas como React Router, Axios, Styled Components, Context API, entre outras.'
        >
          <SiJavascript className='text-5xl' />
          <SiTypescript className='text-5xl' />
          <DiReact className='text-5xl' />
          <SiStyledcomponents className='text-5xl' />
        </Service>
      </div>
    </section>
  )
}