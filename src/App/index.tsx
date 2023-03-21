import { ThemeProvider } from "styled-components"
import { Header } from "../components/Header"
import { ProfileSection } from "../components/ProfileSection"
import { GlobalStyle } from "../styles/global"

import { defaultTheme } from "../styles/themes/default"
import { ContentContainer } from "./styles"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <ContentContainer>
        <ProfileSection />
      </ContentContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
