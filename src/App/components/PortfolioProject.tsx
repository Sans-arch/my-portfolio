interface IPortfolioProject {
    imgLink: string
    alt?: string
}

export function PortfolioProject({ imgLink, alt }: IPortfolioProject) {
    return (
        <div className='basis-1/3 flex-1'>
            <img
                src={imgLink}
                alt={alt ? alt : ""}
                width={'100%'}
                height={'100%'}
                // className='rounded-lg object-cover transform hover:scale-110'
                // className='rounded-lg object-cover opacity-70 hover:opacity-100 transition-opacity duration-300'
                // className='rounded-lg object-cover transform hover:rotate-90 transition-transform duration-500'
                // className='rounded-lg object-cover hover:blur-lg transition-all duration-500'
                // className='rounded-lg object-cover hover:scale-x-75 transition-transform duration-500'
                // className='rounded-lg object-cover hover:brightness-150 transition-all duration-500'
                // className='rounded-lg object-cover hover:w-96 transition-all duration-500'
                // className='rounded-lg object-cover hover:blur-sm transition-all duration-500'
                // className='rounded-lg object-cover hover:translate-x-4 transition-all duration-500'
                // className='rounded-lg object-cover hover:saturate-150 transition-all duration-500'
                // className='rounded-lg object-cover hover:translate-x-4 hover:scale-110 transition-all duration-500'
                // className='rounded-lg object-cover hover:scale-125 transition-all duration-500'
                // className='rounded-lg object-cover hover:opacity-75 transition-all duration-500'
                // className='rounded-lg object-cover hover:rotate-12 hover:scale-110 transition-all duration-500'
                // className='rounded-lg object-cover hover:translate-x-2 hover:opacity-75 transition-all duration-500'
                // className='rounded-lg object-cover hover:rotate-6 hover:-translate-y-2 transition-all duration-500'
                // className='rounded-lg object-cover hover:translate-x-2 hover:opacity-75 transition-all duration-500'
                // className='rounded-lg object-cover hover:bg-green-500 hover:opacity-75 transition-all duration-500'
                // className='rounded-lg object-cover hover:bg-red-500 hover:translate-x-2 hover:translate-y-2 transition-all duration-500'
                // className='rounded-lg object-cover hover:scale-105 hover:rotate-3 transition-all duration-500'
                // className='rounded-lg object-cover hover:bg-yellow-400 hover:translate-x-2 hover:translate-y-2 transition-all duration-500'
                className='rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-500'
            />
        </div>
    )
}