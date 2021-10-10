import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddPost } from "../actions/PostAction";

const Tweet = (props) => {
    const { state, addPost } = props;
    let history = useHistory();
    const { userId } = state.authState.user;
    const [post, setPost] = useState({ userId });

    const createPost = (e) => {
        e.preventDefault();
        addPost(post, history);
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-eton font-weight-bold text-grey">Share something</div>
            <div className="card-body">
                <form onSubmit={(e) => createPost(e)}>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="Detailed Description"
                            required
                            rows="5"
                            onChange={(event) => {
                                const postContent = event.target.value;
                                setPost({ ...post, ...{ postContent } });
                            }}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Post Tweet
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post, history) => {
            dispatch(AddPost(post, history));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);