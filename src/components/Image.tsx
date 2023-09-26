function Image({src, alt}: ImageInterface) {
    return <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} width={100}/>
}

export default Image;
