import {render, screen} from "@testing-library/react";
import Image from "../../../src/Domain/Image/Image";
import {ImageInterface} from "../../../src/Domain/Image/ImageInterface";

test('App', async () => {
    const sampleImage: ImageInterface = {
        id: 123456,
        previewURL: "preview=-url",
        type: "type-x",
        user: "user-a",
        webformatURL: "webformat-url"
    };

    await render(<Image {...sampleImage} />);
    expect(screen.getByText('123456 - type-x')).toBeDefined();
    expect(screen.getByText(/type-x/i)).toBeDefined();
    expect(screen.getByText(/user-a/i)).toBeDefined();
    //expect(screen.getByText(/preview-url/i)).toBeDefined();
    //expect(screen.findByText(/webformat-url/i)).toBeDefined();
});
