import { DiJava, DiNodejs } from 'react-icons/di'
import { SiApachetomcat } from 'react-icons/si'

import { Service } from "./Service";
import { ServicesText } from "./ServicesText";

import design from '../../assets/design.png';
import code from '../../assets/code.png';
import consulting from '../../assets/consulting.png';

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
        </Service>
        <Service
          imgLink={consulting}
          title="Front-end"
          description='Experiência com desenvolvimento front-end'
        />
      </div>
    </section>
  )
}