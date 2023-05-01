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
                className='rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-500'
            />
        </div>
    )
}