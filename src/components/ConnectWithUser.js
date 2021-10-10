import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { GetAllUsers } from '../actions/UsersAction';
import User from './User';

export const ConnectWithUser = (props) => {
    const dispatch = useDispatch();
    const {getUsers} = props;

    useEffect(
        () => {
            getUsers();
        }, []
    )

    return (
        <div className="pt-2">
            {(props.state.allUserState.isAllLoaded) ? (
                props.state.allUserState.users.length > 0 ? (
                    <React.Fragment>
                        <table className="table">
                            <tbody align="center">
                                {props.state.allUserState.users.filter(user => user.userId != props.state.authState.user.userId).map((user) => (
                                    <User
                                        currentUser = {props.state.authState.user.userId}
                                        user={user}
                                        key={user.userId}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="font-weight-light font-italic">No Other Users Yet.</p>   
                    </React.Fragment>
                )
            ) : (
                <React.Fragment>
                    <p className="font-weight-light font-italic">Loading Users....</p>
                </React.Fragment>
            )}
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
        getUsers: () => {
            dispatch(GetAllUsers());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectWithUser);
