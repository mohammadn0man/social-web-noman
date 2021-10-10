import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { FollowUser } from '../actions/UsersAction';

export const User = (props) => {
    const {followUser} = props;
    let history = useHistory();
    const {user} = props;
    const {currentUser, key} = props
    const [data, setData] = useState({
        followedByUserId:currentUser,
        followedToUserId:user.userId
    })

    function isFollow (followers) {
        if(followers.length == 0){
            return false;
        }
        var ar = [];
        for(let i = 0; i < followers.length; i++){
            ar.push(followers[i].followedByUserId)
        }
        for(let i = 0; i < ar.length; i++){
            if(ar[i] == currentUser){
                return true;
            }
        }
        return false;
    }

    return (
        <div class="user_card d-flex justify-content-between align-items-center p-l-3 p-r-3 w-75">
            <div class="user_container">
                <FaUsers size={180} />
            </div>
            <div class="user_container">
                <h4><b>{user.fullName} </b></h4>
                <h6>@{user.userName}</h6>
                <div className="user_container justify-content-right p-0">
                    {isFollow(user.followers) ? (
                        <React.Fragment>
                            <span className="text-white btn btn-grey btn-head">Following</span>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                        <button
                            className="text-white btn btn-head"
                            onClick={() => {
                                followUser(data, history);
                            }}
                        >
                            Follow 
                        </button>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUser : (data, history) => {
            dispatch(FollowUser(data, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
