import { PortfolioProject } from "./PortfolioProject";
import { PortfolioText } from "./PortfolioText";

import web1 from '../../assets/web1.png';
import web2 from '../../assets/web2.png';
import web3 from '../../assets/web3.png';
import web4 from '../../assets/web4.png';
import web5 from '../../assets/web5.png';
import web6 from '../../assets/web6.png';

export function Portfolio() {
  return (
    <section>
      <PortfolioText />
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <PortfolioProject imgLink={web1} />
        <PortfolioProject imgLink={web2} />
        <PortfolioProject imgLink={web3} />
        <PortfolioProject imgLink={web4} />
        <PortfolioProject imgLink={web5} />
        <PortfolioProject imgLink={web6} />
      </div>
    </section>
  )
}