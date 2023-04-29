import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";

interface IHeader {
  isDarkModeEnabled: boolean
  onChangeTheme: () => void
}

export function Header({ isDarkModeEnabled, onChangeTheme }: IHeader) {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons dark:text-gray-200'>
        Meu Portfólio
      </h1>
      <ul className='flex items-center'>
        <li>
          {isDarkModeEnabled ? (
            <BsBrightnessHighFill
              onClick={onChangeTheme}
              className='cursor-pointer text-2xl text-teal-50'
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={onChangeTheme}
              className='cursor-pointer text-2xl'
            />
          )}
        </li>
        <li>
          <a
            className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}