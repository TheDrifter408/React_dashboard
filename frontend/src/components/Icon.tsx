type IconProps = {
    title:string;
    ImgPath:string;
    Href:string;
}
export default function Icon({title,ImgPath,Href}:IconProps){
    return(
        <a href={Href} className="icon-container">
            <img className="icon" src={ImgPath} alt={`{title}-picture`} />
            {title}
        </a>
    )
}