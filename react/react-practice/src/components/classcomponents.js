import React from "react";

class List extends React.component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default List;
