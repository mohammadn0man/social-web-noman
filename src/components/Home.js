import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { useHistory } from "react-router";
import ReactPaginate from 'react-paginate';
import { GetPosts } from '../actions/PostAction';
import { connect, useDispatch } from 'react-redux';
import Post from './Post';
import '../style/pagination.scss';

const Home = (props) => {
    const history = useHistory();
    if(localStorage.getItem("auth") === null){
        history.push("/");  
    }
    const dispatch = useDispatch();
    const { getPosts, state } = props;

    useEffect( () => {
        getPosts(state.authState.user.userName);
    }, []);

    useEffect(() => {
        pagination(pageState.offset, pageState.currentPage)
    }, [state.allPosts.posts]);

    const [pageState, setPageState] = useState({
        offset: 0,
        data: [],
        perPage: 5,
        currentPage: 0,
    });

    function pagination(offset, selectedPage) {
        const slice = state.allPosts.posts.slice(offset, offset + pageState.perPage)
        const postData = slice.map((post) => (
            <Post post={post} key={post.postId} />
        ));
        setPageState({
            ...pageState,
            pageCount: Math.ceil(state.allPosts.posts.length / pageState.perPage),
            ...{ postData },
            currentPage: selectedPage,
            ...{ offset }
        })
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * pageState.perPage;
        pagination(offset, selectedPage);
    };



    return (
        <div>
            {(state.allPosts.isAllLoaded && (state.allPosts.posts.length > 0)) ? (
                < React.Fragment >
                    <table className="table shadow">
                        <tbody>
                            {pageState.postData}
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageState.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </tbody>
                    </table>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h4>Nothing to show here, None of user you follow has posted anything.</h4>
                </React.Fragment>
            )}
            <Footer />
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (userName) => {
            dispatch(GetPosts(userName));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);