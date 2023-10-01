import axios from "axios";
import * as z from "zod";
import {useQuery} from "@tanstack/react-query";

const PixabayImageListUrl = 'https://pixabay.com/api/?key=39676804-5edb90c96ed25e80d3dabf5a6&q=food&orientation=horizontal&per_page=10&order=latest';

const ImageSchema = z.object({
    id: z.number(),
    type: z.string(),
    previewURL: z.string(),
    webformatURL: z.string(),
    user: z.string(),
});

const ImagesListSchema = z.object({
    total: z.number(),
    totalHits: z.number(),
    hits: z.array(ImageSchema)
});

type ImageSchema = z.infer<typeof ImageSchema>;

export function useFetchImages() {
    return useQuery({
        queryKey: ['images'],
        queryFn: fetchImages,
    });
}

const fetchImages = async (): Promise<ImageInterface[]> => {
    const response = await axios.get(PixabayImageListUrl);

    try {
        ImagesListSchema.parse(response.data);
    } catch (error) {
        console.log(error);
    }

    let res = response.data.hits.map((image: ImageSchema) => {
        let singleImage: ImageInterface = {
            id: image.id,
            type: image.type,
            previewURL: image.previewURL,
            webformatURL: image.webformatURL,
            user: image.user,
        }

        return singleImage;
    });

    if (res !== undefined) {
        return res;
    }

    throw new Error('No images found');
}