import ImageViewer from "./components/ImageViewer.tsx";

function App() {
    const images: ImageInterface[] = [
        {
            src: "https://visma-checklist-dev.s3.eu-central-1.amazonaws.com/case/2/66279/42369af2-377f-4b5d-adb7-bc75f519d7b0.jpg",
            alt: "jason-briscoe-1"
        },
        {
            src: "https://visma-checklist-dev.s3.eu-central-1.amazonaws.com/case/2/66279/42369af2-377f-4b5d-adb7-bc75f519d7b0.jpg",
            alt: "jason-briscoe-2"
        },
        {
            src: "https://visma-checklist-dev.s3.eu-central-1.amazonaws.com/case/2/66279/7e31a53d-6aa5-4326-85ba-ac4dec4aa7d5.jpg",
            alt: "jason-briscoe-3"
        },
        {
            src: "https://visma-checklist-dev.s3.eu-central-1.amazonaws.com/case/2/66279/37add396-cb61-45d2-8886-7baf37c63f51.jpg",
            alt: "jason-briscoe-4"
        },
        {
            src: "https://visma-checklist-dev.s3.eu-central-1.amazonaws.com/case/2/66279/2e2f64d1-7f35-41db-8f27-18b8340615d5.jpg",
            alt: "jason-briscoe-5"
        },
        {
            src: "https://visma-checklist-dev.s3.eu-central-1.amazonaws.com/case/2/66279/6afef862-7f99-4ec4-83d7-04f5f6dd8610.jpg",
            alt: "jason-briscoe-6"
        },
    ];

    return <>
        <div className="container mx-auto content-center">
            <h1 className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Image browser
            </h1>
            <ImageViewer images={images}/>
        </div>
    </>
}

export default App
