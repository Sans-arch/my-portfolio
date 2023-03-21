import styled from "styled-components";

export const Container = styled.header`
  /* border: 2px solid red; */
  display: flex;
  background: ${props => props.theme["gray-800"]};
  padding: 15px 0;
`

export const Menu = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* border: 2px solid blue; */
  gap: 15rem;
`

export const MenuItem = styled.a`
  /* border: 2px solid red; */
  font-size: 1.5rem;
  text-decoration: none;
`