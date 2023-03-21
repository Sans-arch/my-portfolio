import { Container, Menu, MenuItem } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <MenuItem>Quem sou</MenuItem>
        <MenuItem>Meus projetos</MenuItem>
        <MenuItem>Contato</MenuItem>
      </Menu>
    </Container>
  );
}
