import {ImageInterface} from "./ImageInterface.ts";

function Image({webformatURL, previewURL, id, user, type}: ImageInterface) {
    return <>
        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={previewURL} alt={user} />

                <div className="card-body">
                    <p className="card-text">{id} - {type}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a href={webformatURL}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{user}</small>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Image;
