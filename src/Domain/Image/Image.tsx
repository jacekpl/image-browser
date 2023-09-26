function Image({url, thumbnailUrl, id, title}: ImageInterface) {
    return <>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={thumbnailUrl} alt={title} width={100}/>
            <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">{title}</p>
                <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
}

export default Image;
