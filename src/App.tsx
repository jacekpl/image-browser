import ImageViewer from "./Domain/Image/ImageViewer.tsx";
import {UseQueryResult} from "@tanstack/react-query";
import {useFetchImages} from "./Domain/Fetcher/Pixabay/PixabayRequest.ts";

function App() {
    const fetchImagesQuery: UseQueryResult<ImageInterface[]> = useFetchImages();

    if (fetchImagesQuery.isLoading) return 'Loading...'
    if (fetchImagesQuery.isError) return 'An error has occurred: ' + fetchImagesQuery.error.message

    return <>
        <div className="container row">
            <ImageViewer images={fetchImagesQuery.data}/>
        </div>
    </>
}

export default App
