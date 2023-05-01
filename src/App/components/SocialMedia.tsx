import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillGithub } from "react-icons/ai";

export function SocialMedia() {
  return (
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      {/* <AiFillTwitterCircle
        className="cursor-pointer hover:text-teal-600 transition-all duration-500"
      /> */}
      <a
        href="https://www.linkedin.com/in/santiago-negreira/"
        target="_blank"
      >
        <AiFillLinkedin
          className="cursor-pointer hover:text-teal-600 transition-all duration-500"
        />
      </a>
      <a
        href="https://github.com/Sans-arch"
        target="_blank"
      >
        <AiFillGithub
          className="cursor-pointer hover:text-teal-600 transition-all duration-500"
        />
      </a>
    </div>
  )
}