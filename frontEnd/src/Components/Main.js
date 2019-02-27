import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single from './single';

class Main extends Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        console.log('main did mount');
        // fetch('http://127.0.0.1:8080')
        // .then(data => data.json())
        // .then(posts => {
        //     console.log('second', posts);
         
        // });
        this.props.startLoadingPosts();
    }

    render() {
        console.log('from mains render',this.props);
        return (

            <div>
                <h1>
                    <Link to='/'>Photo</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>)
                } />
                <Route path="/AddPhoto" render={(params) => (
                    <AddPhoto {...this.props} onHistory={params.history}/>
                )
                } />
                <Route path="/single/:id" render={(params) => (
                    <Single {...this.props}  {...params} />
                )
                } />
            </div>

        );
    }
}

export default Main;