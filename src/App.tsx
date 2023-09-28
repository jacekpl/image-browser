import ImageViewer from "./Domain/Image/ImageViewer.tsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function App() {
    //https://pixabay.com/api/?key=&per_page=20
    const fetchImages = () => {
        return axios.get<ImageInterface[]>('https://jsonplaceholder.typicode.com/photos?albumId=1').then((response) => response.data);
    }

    const {isLoading, error, data} = useQuery<ImageInterface[]>({
        queryKey: ['images'],
        queryFn: fetchImages,
    });

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error

    const images: ImageInterface[] = data as ImageInterface[];

    return <>
        <div className="container row">
            <ImageViewer images={images}/>
        </div>
    </>
}

export default App
