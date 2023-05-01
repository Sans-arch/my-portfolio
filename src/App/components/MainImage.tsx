import deved from '../../assets/dev-ed-wave.png';

export function MainImage() {
  return (
    <div
      className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 
      overflow-hidden md:h-96 md:w-96 mb-10 hover:animate-spin-low-image'
    >
      <img
        src={deved}
        alt="Foto"
        style={{ objectFit: "cover", height: "100%" }}
      />
    </div>
  )
}