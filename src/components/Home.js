import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import '../style/pagination.scss';

const Home = (props) => {
    // const { loadAllQuestions, questionState } = props;

    // useEffect(() => {
    //     pagination(pageState.offset, pageState.currentPage)
    // }, [questionState]);

    // const [pageState, setPageState] = useState({
    //     offset: 0,
    //     data: [],
    //     perPage: 5,
    //     currentPage: 0,
    // });

    // function pagination(offset, selectedPage) {
        // const slice = questionState.questions.slice(offset, offset + pageState.perPage)
        // const postData = slice.map((question) => (
            // <Question question={question} key={question.questionId} />
        // ));
        // setPageState({
        //     ...pageState,
        //     pageCount: Math.ceil(questionState.questions.length / pageState.perPage),
        //     ...{ postData },
        //     currentPage: selectedPage,
        //     ...{ offset }
        // })
    // }

    // const handlePageClick = (e) => {
    //     const selectedPage = e.selected;
    //     const offset = selectedPage * pageState.perPage;
    //     pagination(offset, selectedPage);
    // };



    return (
        <div>
            {/* {questionState.isAllLoaded || questionState.questions.length > 0 ? ( */}
            { (false) ? 
                (< React.Fragment >
                    <table className="table shadow">
                        <tbody>
                            {/* {pageState.postData} */}
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                // pageCount={pageState.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                // onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </tbody>
                    </table>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h4>Nothing to show here...</h4>
                </React.Fragment>
            )}
            <Footer />
        </div >
    )
}

// const mapStateToProps = (pageState) => {
//     return {
//         questionState: pageState.questionState,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadAllQuestions: (val, sort) => {
//             dispatch(LoadAllQuestions(val, sort));
//         },
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;