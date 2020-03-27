import React from "react";
import { connect } from "react-redux";

const getData = () => (dispatch: any) =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      console;
      dispatch({ type: "DATA_LOADED", payload: json });
    });

export class Post extends React.Component<any> {
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  render() {
    return null;
  }
}

export default connect(null, { getData })(Post);
