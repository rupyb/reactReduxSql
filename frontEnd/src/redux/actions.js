import { database } from '../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        fetch('http://127.0.0.1:8080', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => data.json())
        .then((response) => {
            if(response.affectedRows) {
                dispatch(addPost(post));
            }
            
        });
    }
}

export function startLoadingPosts() {
    return (dispatch) => {
       // console.log('startloadingPost');

        fetch('http://127.0.0.1:8080')
            .then(data => data.json())
            .then(posts => {
                // console.log('second', posts);
                dispatch(loadPosts(posts));
            }).catch(error => console.log(error));
    }
}

export function startRemovingPosts(index, id) {
    console.log(id);
    return (dispatch) => {
        return fetch(`http://127.0.0.1:8080/${id}`, {
            method: 'DELETE',
        })
        .then(data => data.json())
        .then((response) => {
            if(response.affectedRows) {
                dispatch(removePost(index));
            }
        });
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    //console.log(posts);

    return {
        type: 'LOAD_POSTS',
        posts
    }
}