import React from 'react';

const Post = ({ post }) => {

    return (
        <tr>
            <td className="align-middle">
                <div className="card-body">
                    <p className="card-title font-italic go-right">
                        {"Posted on : " + post.timestamp.substring(0, 10)}
                    </p>
                    <p className="card-title font-weight-bold go-left">
                        {"userName : @alpha"}
                    </p>
                    <p className="card-text go-right">
                        {post.postContent}
                    </p>
                </div>
            </td>
        </tr>
    )
}

export default Post
