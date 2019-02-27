import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    state = {  }
    componentDidMount() {
        this.props.startLoadingPosts();
    }
    render() { 
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find(post => post.id === id);
        const comments = this.props.comments[id] || [];
        const index = this.props.posts.findIndex(post => post.id ===id);
        console.log('index', index);
        console.log('props', this.props);
        
        return ( 
            <div className="single-folder">
                <Photo post={post} {...this.props} index={index}/>
                <Comments addComment={this.props.addComment}
                comments={comments} id={id}/>
            </div>
         );
    }
}
 
export default Single;