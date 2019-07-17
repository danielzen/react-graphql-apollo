import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Post extends React.Component {
  render() {
    return (
      <div className="pa3 bg-black-05 ma3">
        <div
          className="w-100"
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className="pt3">
          {this.props.post.description}&nbsp;
          <span className="red f6 pointer dim" onClick={this.handleDelete}>
            Delete
          </span>
        </div>
      </div>
    )
  }

  handleDelete = async () => {
    await this.props.deletePostMutation({variables: {id: this.props.post.id}});
    this.props.refresh();
  }

}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
const PostWithMutation = graphql(DELETE_POST_MUTATION,
  { name: 'deletePostMutation'})(Post);

export default PostWithMutation;
