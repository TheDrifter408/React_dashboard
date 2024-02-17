type HeaderProps = {
    title:string;
    path: string;
}

export default function Header({headers}:{headers:HeaderProps[]}){
    return (
        <header>
            <div className="links-container">
                {
                    headers.map((header:HeaderProps,idx:number) => (
                        <a key={idx} href={header.path}>{header.title}</a>
                    ))
                }
            </div>
        </header>
    )
}