import Image from "./Image.tsx";

function ImageViewer({images}: { images: ImageInterface[] }) {
    return <>
        {images.map((image: ImageInterface, index: number) => {
            return <div className="col-sm-3" key={index}>
                <Image url={image.url} thumbnailUrl={image.thumbnailUrl} id={image.id} title={image.title}/>
            </div>
        })}
    </>
}

export default ImageViewer;
