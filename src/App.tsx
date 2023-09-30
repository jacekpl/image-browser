import ImageViewer from "./Domain/Image/ImageViewer.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchImages} from "./Domain/Fetcher/Pixabay/PixabayRequest.ts";

function App() {
    const fetchImagesQuery = useQuery({
        queryKey: ['images'],
        queryFn: fetchImages,
    });

    if (fetchImagesQuery.isLoading) return 'Loading...'
    if (fetchImagesQuery.isError) return 'An error has occurred: ' + fetchImagesQuery.error.message

    return <>
        <div className="container row">
            <ImageViewer images={fetchImagesQuery.data}/>
        </div>
    </>
}

export default App
