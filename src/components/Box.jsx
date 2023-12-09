function Box(props) {
  console.log(props);
  const styles = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: props.on ? "#222" : "transparent",
  };

  return <div className="box" style={styles} onClick={props.toggle}></div>;
}

export default Box;
