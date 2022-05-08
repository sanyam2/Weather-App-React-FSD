import React, { Component } from "react";
import "./CommentSection.css";

export class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [], // array to store comments
      userComment: null,
    };
    this.postComment = this.postComment.bind(this);
  }

  updateUserComment(e) {
    this.setState({ userComment: e.target.value });
  }

  postComment() {
    if (this.state.userComment.length) {
      this.setState({
        userComment: "",
      });
      this.state.comments.push(this.state.userComment);
    }
  }

  render() {
    const listOfComments = this.state.comments.map((eachComment) => (
      <p className="cmtList">
        <i class="fa fa-user" aria-hidden="true"></i> {eachComment}
      </p>
    ));
    return (
      <div>
        <div>
          <div>
            <div className="commentMain">
              <textarea
                className="writeCommenttextBox"
                placeholder="Enter your comment here..."
                value={this.state.userComment}
                onChange={(e) => this.updateUserComment(e)}
              ></textarea>
              <br />
              <button className="commentBtn" onClick={this.postComment}>
                Comment
              </button>
              <br />
              <br />
              <div className="commentWritten">
                <p className="commentBlock">
                  <b>Comments ({listOfComments.length})</b>{" "}
                </p>
                {listOfComments}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
