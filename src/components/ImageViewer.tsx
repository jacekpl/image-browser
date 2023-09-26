import Image from "./Image.tsx";

function ImageViewer({images}: { images: ImageInterface[] }) {
    return <>
        {images.map((image: ImageInterface, index: number) => {
            return <div className="col-sm-3">
                <Image key={index} src={image.src} alt={image.alt}/>
            </div>
        })}
    </>
}

export default ImageViewer;
