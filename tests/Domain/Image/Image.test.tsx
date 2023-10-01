import {render} from "@testing-library/react";
import Image from "../../../src/Domain/Image/Image";
import {ImageInterface} from "../../../src/Domain/Image/ImageInterface";

it('should have button with go somewhere text', () => {
    let sampleImage: ImageInterface = {
        id: 1,
        previewURL: "a",
        type: "b",
        user: "b",
        webformatURL: "d"
    };

    const component = render(<Image image={sampleImage}/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree);
}); 