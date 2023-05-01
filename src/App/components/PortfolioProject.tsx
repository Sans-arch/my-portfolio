interface IPortfolioProject {
    imgLink: string
    repoUrl: string
    alt?: string
}

export function PortfolioProject({ imgLink, repoUrl, alt }: IPortfolioProject) {
    return (
        <div className='relative overflow-hidden rounded-lg'>
            <a href={repoUrl} target="_blank">
                <img
                    src={imgLink}
                    alt={alt ? alt : ""}
                    className=' w-full h-full object-cover
                    hover:scale-110 hover:shadow-lg transition-all duration-500'
                />
            </a>
        </div>
    )
}