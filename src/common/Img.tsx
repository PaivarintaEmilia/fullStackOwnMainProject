import React from "react";


interface ImgProps {
    source: string,
    alt: string,
    className: string,
    id: string,
}


const Img: React.FC<ImgProps> = ({ source, alt, className, id}) => {

    return <img src={source} alt={alt} className={className} id={id}/>
}

export default Img;