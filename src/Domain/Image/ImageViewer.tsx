import Image from "./Image.tsx";

function ImageViewer({images}: { images: ImageInterface[] }) {
    return <>
        {images.map((image: ImageInterface, index: number) => {
            return <div className="col-sm-3" key={index}>
                <Image webformatURL={image.webformatURL} previewURL={image.previewURL} id={image.id} user={image.user} type={image.type}/>
            </div>
        })}
    </>
}

export default ImageViewer;
