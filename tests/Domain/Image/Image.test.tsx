import {render, screen} from "@testing-library/react";
import Image from "../../../src/Domain/Image/Image";
import {ImageInterface} from "../../../src/Domain/Image/ImageInterface";
import {expect} from "vitest";

describe('App', () => {
    it('renders single image', () => {
        let sampleImage: ImageInterface = {
            id: 123456,
            previewURL: "preview=-url",
            type: "type-x",
            user: "user-a",
            webformatURL: "webformat-url"
        };

        render(<Image id={sampleImage.id} previewUrl={sampleImage.previewURL} type={sampleImage.type} user={sampleImage.user} webformatURL={sampleImage.webformatURL} />);

        // expect(screen.getByText(/123456/i)).toBeDefined();
        // expect(screen.getByText(/preview-url/i)).toBeDefined();
        // expect(screen.getByText(/type-x/i)).toBeDefined();
        // expect(screen.getByText(/user-a/i)).toBeDefined();
        //expect(screen.findByText(/webformat-url/i)).toBeDefined();
    });
});
