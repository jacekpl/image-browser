function Image({webformatURL, previewURL, id, user, type}: ImageInterface) {
    return <>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={previewURL} alt={user} width={100}/>
            <div className="card-body">
                <h5 className="card-title">{id} - {type}</h5>
                <p className="card-text">{user}</p>
                <a href={webformatURL} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
}

export default Image;
