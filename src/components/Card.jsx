function Card (props) {
    return (
        <div className="card">
            <div className="card-img">
                <img className="card-img-content" src= {props.url} alt={props.name} />
            </div>
            <p className="card-text">{props.name}</p>
        </div>
    )
}

export default Card