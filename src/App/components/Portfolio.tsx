import { PortfolioProject } from "./PortfolioProject";
import { PortfolioText } from "./PortfolioText";

export function Portfolio() {
  return (
    <section>
      <PortfolioText />
      <div className='grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3'>
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/221437246-0bce4444-785a-406c-8341-8214bb94d948.png"
          repoUrl="https://github.com/Sans-arch/desafio-01-praticando-conceitos-reactjs"
        />
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/221356358-2030bdfe-5f7b-4cf1-80a2-3926f7ca2c96.png"
          repoUrl="https://github.com/Sans-arch/01-fundamentos-react-js"
        />
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/221834998-1c41f6b3-516f-489f-a449-187c0ae5fc77.png"
          repoUrl="https://github.com/Sans-arch/02-ignite-timer"
        />
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/226357681-2043eb58-9d3f-4222-88e1-cee7ef2dc532.png"
          repoUrl="https://github.com/Sans-arch/coffee-delivery"
        />
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/235526412-3979dece-66a0-42bb-b8d4-6aa2a664a22f.png"
          repoUrl="https://github.com/Sans-arch/react-fundamentos"
        />
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/235525854-84806f98-28fd-4ccd-955d-dfb24ddb0d5d.png"
          repoUrl="https://github.com/Sans-arch/mycontacts-api"
        />
        <PortfolioProject
          imgLink="https://user-images.githubusercontent.com/69471715/235713266-c95604ee-b878-4b33-b9b2-a09739b3b6b1.png"
          repoUrl="https://github.com/Sans-arch/03-dt-money"
        />
      </div>
    </section>
  )
}