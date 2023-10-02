import ImageViewer from "./ImageViewer.tsx";
import {UseQueryResult} from "@tanstack/react-query";
import {useFetchImages} from "./../Fetcher/Pixabay/PixabayRequest.ts";
import {ImageInterface} from "./ImageInterface.ts";

function ImageViewerPage() {
    const fetchImagesQuery: UseQueryResult<ImageInterface[]> = useFetchImages();

    if (fetchImagesQuery.isLoading) return 'Loading...'
    if (fetchImagesQuery.isError) return 'An error has occurred: ' + fetchImagesQuery.error

    return (
        <ImageViewer images={fetchImagesQuery.data}/>
    )
}

export default ImageViewerPage
