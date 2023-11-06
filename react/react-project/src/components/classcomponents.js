import React from "react";

class List extends React.component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "earth"
    }
    console.log("Hey Iam from constructor");
  }

  componentDidMount() {
    this.setState({planet: "Mars"});
    console.log("Hey Iam from componentDidMount");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("Iam from shouldComponentUpdate");
    console.log({
      nextProp,
      nextState
    });
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Iam from getSnapshotBeforeUpdate");
    console.log({
      prevProp,
      prevState
    });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    console.log("Hey Iam from rendered");
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}

export default List;
