interface IService {
    imgLink: string
    title: string
    description: string
}

export function Service({ imgLink, title, description }: IService) {
    return (
        <div
            className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500'
        >
            <img
                src={imgLink}
                alt="Foto de card"
                width={100}
                height={100}
                style={{ margin: "auto" }}
            />
            <h3
                className='text-lg font-medium pt-8 pb-2'
            >
                {title}
            </h3>
            <p className='py-2'>
                {description}
            </p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>
    )
}