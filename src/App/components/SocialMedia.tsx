import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

export function SocialMedia() {
  return (
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <AiFillTwitterCircle />
      <AiFillLinkedin />
      <AiFillYoutube />
    </div>
  )
}