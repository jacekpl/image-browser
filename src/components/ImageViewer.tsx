import Image from "./Image.tsx";

function ImageViewer({images}: { images: ImageInterface[]}) {
    return <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image: ImageInterface, index: number) => {
                return <div>
                    <Image key={index} src={image.src} alt={image.alt}/>
                </div>
            })}
        </div>
    </>
}

export default ImageViewer;
