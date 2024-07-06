function Card (props) {
    return (
        <div>
            <img src= {props.url} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default Card