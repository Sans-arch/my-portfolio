import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BoxIcon, CartIcon, ClockIcon, CoffeeIcon, Container, MainImageArea, MainTitle, PresentationContent, Subtitle, Topic, TopicsSection } from "./styles";

export function ProfileSection() {
  return (
    <Container>
      <PresentationContent>
        <MainTitle>Encontre o café perfeito para qualquer hora do dia</MainTitle>
        <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

        <TopicsSection>
          <Topic>
            <CartIcon>
              <ShoppingCart size={24} weight="fill" />
            </CartIcon>
            <p>Compra simples e segura</p>
          </Topic>
          <Topic>
            <BoxIcon>
              <Package size={24} weight="fill" />
            </BoxIcon>
            <p>Embalagem mantém o café intacto</p>
          </Topic>
          <Topic>
            <ClockIcon>
              <Timer size={24} weight="fill" />
            </ClockIcon>
            <p>Entrega rápida e rastreada</p>
          </Topic>
          <Topic>
            <CoffeeIcon>
              <Coffee size={24} weight="fill" />
            </CoffeeIcon>
            <p>O café chega fresquinho até você</p>
          </Topic>
        </TopicsSection>
      </PresentationContent>

      <MainImageArea>
        <img src={"https://avatars.githubusercontent.com/u/69471715?v=4"} alt="Imagem principal de um café" />
      </MainImageArea>
    </Container>
  )
}