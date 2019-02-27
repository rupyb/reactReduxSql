import React, { Component } from 'react';

class Comments extends Component {
    state = {  }

    handleSubmit = (event) => {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        this.props.addComment(comment, this.props.id);
        event.target.elements.comment.value = '';
    }

    render() { 
        console.log(this.props);
        
        return ( 
            <div className="comment-div">
            
                <form className="comment-form"
                onSubmit={this.handleSubmit}>
                    <input name="comment" type="text" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
                {
                this.props.comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    )
                ) 
            }
            </div>

         );
    }
}
 
export default Comments;