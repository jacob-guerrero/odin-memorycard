function Title(props) {
    return (
        <div className="header-left">
            <h1 className="title">{props.titleName}</h1>
            <p className="desc">Get points by clicking on an image but don&apos;t click on any more than once!</p>
        </div>
    )
}

export default Title