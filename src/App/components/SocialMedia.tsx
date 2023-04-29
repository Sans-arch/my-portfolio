import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillGithub } from "react-icons/ai";

export function SocialMedia() {
  return (
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <AiFillTwitterCircle
        className="cursor-pointer hover:text-teal-600 transition-all duration-500"
      />
      <AiFillLinkedin
        className="cursor-pointer hover:text-teal-600 transition-all duration-500"
      />
      <AiFillGithub
        className="cursor-pointer hover:text-teal-600 transition-all duration-500"
      />
    </div>
  )
}