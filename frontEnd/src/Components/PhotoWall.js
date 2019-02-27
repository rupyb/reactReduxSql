import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { FaPlus } from "react-icons/fa";
import {Link} from 'react-router-dom';

function PhotoWall (props) {
        return ( 
            <div>
                <Link className="addIcon" 
                to="/AddPhoto">
                <FaPlus size={80}/>
                </Link>
            <div className="photo-grid">
                {props.posts.sort((b, a) => a.id - b.id)
                .map((post, index) => 
                <Photo key={index} post={post} {...props}
                index={index}/>)}
            </div>
            </div>
         );
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}
 
export default PhotoWall;
