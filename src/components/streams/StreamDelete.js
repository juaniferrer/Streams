import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../redux/actions";
import { Link } from "react-router-dom";
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <Link className="ui button" to="/">
          Cancel
        </Link>
        <button
          className="ui negative button"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          Delete
        </button>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete ${this.props.stream.title}?`;
  }

  renderDelete() {
    return (
      <Modal
        header="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }

  render() {
    return this.renderDelete();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
