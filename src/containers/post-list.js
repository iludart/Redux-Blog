import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';
import _ from 'lodash';

class PostList extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item">
                    {post.title}
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(PostList);