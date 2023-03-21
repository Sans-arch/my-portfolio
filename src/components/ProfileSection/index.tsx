import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BoxIcon, CartIcon, ClockIcon, CoffeeIcon, Container, MainImageArea, MainTitle, PresentationContent, Subtitle, Topic, TopicsSection } from "./styles";

export function ProfileSection() {
  return (
    <Container>
      <PresentationContent>
        <MainTitle>Olá, me chamo Santiago, desenvolvedor de software no Brasil</MainTitle>
        <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

        <TopicsSection>
          <Topic>
            <img src="https://abrudz.github.io/logos/JS.svg" alt="" />
          </Topic>
          <Topic>
            <img src="https://abrudz.github.io/logos/JS.svg" alt="" />
          </Topic>
          <Topic>
            <img src="https://abrudz.github.io/logos/JS.svg" alt="" />
          </Topic>
          <Topic>
            <img src="https://abrudz.github.io/logos/JS.svg" alt="" />
          </Topic>
        </TopicsSection>
      </PresentationContent>

      <MainImageArea>
        <img src={"https://avatars.githubusercontent.com/u/69471715?v=4"} alt="Imagem principal de um café" />
      </MainImageArea>
    </Container>
  )
}