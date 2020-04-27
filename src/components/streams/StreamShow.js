import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../redux/actions";
class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream() {
    if (!this.props.stream) return <div>Loading...</div>;
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }

  render() {
    return this.renderStream();
  }
}

const mapStateToProps = (state, ownParams) => {
  return { stream: state.streams[ownParams.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
