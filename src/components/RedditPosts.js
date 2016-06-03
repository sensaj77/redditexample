import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class RedditPosts extends Component {
    constructor(props) {
    super(props)
  }
 
  render() {
  
    let postsNumber = this.props.posts.length;

    let pageOnePostsJSX = (<ul>
        {this.state.posts.map((post, i) =>
          <Link to='/articles' key={i}><li className="list-group-item">{post.title}</li></Link>
        )}
      </ul>);
    
    return (
      <div>
        <ul className="list-group">
            {pageOnePostsJSX}
        </ul>
      </div>
    )
  }
}

RedditPosts.propTypes = {
  posts: PropTypes.array.isRequired
}