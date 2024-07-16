function Title(props) {
  return (
    <div className="header-left">
      <h1 className="title" translate="no">{props.titleName}</h1>
      <p className="desc" translate="yes">
        Get points by clicking on an image but don&apos;t click on any of them more than once!
      </p>
    </div>
  );
}

export default Title;
