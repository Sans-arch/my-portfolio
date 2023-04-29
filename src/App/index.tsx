import '../styles/globals.css'
import { useState } from 'react'

import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { SocialMedia } from './components/SocialMedia';
import { MainImage } from './components/MainImage';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function handleChangeTheme() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <Header
            isDarkModeEnabled={darkMode}
            onChangeTheme={handleChangeTheme}
          />
          <Introduction />
          <SocialMedia />
          <MainImage />
        </section>
        <Services />
        <Portfolio />
      </main>
    </div>
  )
}

export default App
