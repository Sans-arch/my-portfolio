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
  )
}