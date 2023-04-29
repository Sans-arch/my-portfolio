import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";

interface IHeader {
  isDarkModeEnabled: boolean
  onChangeTheme: () => void
}

export function Header({ isDarkModeEnabled, onChangeTheme }: IHeader) {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons dark:text-gray-200'>
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
      </ul>
    </nav>
  )
}