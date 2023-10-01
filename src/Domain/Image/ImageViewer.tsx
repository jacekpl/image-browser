import Image from "./Image.tsx";
import {ImageInterface} from "./ImageInterface.ts";

function ImageViewer({images}: { images: ImageInterface[] }) {
    return <>
        <h1>Image browser</h1>
        {images.map((image: ImageInterface, index: number) => {
            return <div className="col-sm-3" key={index}>
                <Image {...image}/>
            </div>
        })}
    </>
}

export default ImageViewer;
