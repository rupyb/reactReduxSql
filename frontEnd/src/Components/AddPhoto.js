import React, { Component } from 'react'

class AddPhoto extends Component {
    constructor() {
        super();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const source = event.target.elements.link.value;
        const caption = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            caption,
            source
        }
        if (caption && source) {
           this.props.startAddingPost(post);
           this.props.onHistory.push('/');
        }
    }

    render() {
        return (
            <>
             
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Link"
                    name="link"/>
                    <input type="text" 
                    placeholder="Description"
                    name="description"/>
                    <button>Post</button>
                </form>
                </div>
            </>
        );
    }
}

export default AddPhoto;