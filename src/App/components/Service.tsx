interface IService {
    imgLink: string
    title: string
    description: string
    children?: React.ReactNode
}

export function Service({ imgLink, title, description, children }: IService) {
    return (
        <div
            className='flex-1 text-center shadow-lg p-10 rounded-xl 
            my-10 dark:bg-slate-800 dark:text-teal-50 hover:shadow-2xl hover:scale-105 transition-all duration-500'
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
            <div className="mt-8 flex justify-center gap-6">
                {children}
            </div>
        </div>
    )
}