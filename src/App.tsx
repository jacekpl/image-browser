import ImageViewer from "./Domain/Image/ImageViewer.tsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function App() {
    const fetchImages = async () => {
        const response = await axios.get('https://pixabay.com/api/?key=39676804-5edb90c96ed25e80d3dabf5a6&q=food&orientation=horizontal&per_page=10&order=latest');
        return response.data;
    }

    //should I always type response - data variable? use generics?
    const {isLoading, error, data} = useQuery({
        queryKey: ['images'],
        queryFn: fetchImages,
        select: (data) => data.hits
    });

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error

    //@todo check if there are any results
    const images: ImageInterface[] = data as ImageInterface[];

    return <>
        <div className="container row">
            <ImageViewer images={images}/>
        </div>
    </>
}

export default App
