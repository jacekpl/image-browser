import Image from "./Image.tsx";
import {ImageInterface} from "./ImageInterface.ts";

function ImageViewer({images}: { images: ImageInterface[] }) {
    return <>
        <div className="album py-5 bg-light p-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {images.map((image: ImageInterface, index: number) => {
                    return <div className="col-sm-3" key={index}>
                        <Image {...image}/>
                    </div>
                })}
            </div>
        </div>
    </>
}

export default ImageViewer;
