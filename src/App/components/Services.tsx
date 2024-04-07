import { DiJava, DiNodejs, DiReact } from "react-icons/di";
import { SiJavascript, SiTypescript, SiVuedotjs, SiAngularjs, SiSpring } from "react-icons/si";

import { Service } from "./Service";
import { ServicesText } from "./ServicesText";

import design from "../../assets/design.png";
import code from "../../assets/code.png";

import servicesData from "../../../services-description.json";

export function Services() {
  return (
    <section>
      <ServicesText />
      <div className="lg:flex gap-10">
        <Service imgLink={design} title="Back-end" description={servicesData.backend.mainDescription}>
          <SiTypescript className="text-5xl" />
          <DiNodejs className="text-5xl" />
          <DiJava className="text-6xl" />
          <SiSpring className="text-5xl" />
        </Service>
        <Service imgLink={code} title="Front-end" description={servicesData.frontend.mainDescription}>
          <SiJavascript className="text-5xl" />
          <SiTypescript className="text-5xl" />
          <DiReact className="text-5xl" />
          <SiVuedotjs className="text-5xl" />
          <SiAngularjs className="text-5xl" />
        </Service>
      </div>
    </section>
  );
}
